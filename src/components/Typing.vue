<template>
  <div class="typing" v-bind:class="{ rtl: RTL }">
    <div>
      <div class="list-container">
        <div ref="wordList" v-bind:style="wordListStyles" class="word-list">
          <div
            v-bind:class="{
              active: word.isActive,
              word: true,
              error: word.status === 2,
              success: word.status == 1 && !word.isActive
            }"
            ref="words"
            v-for="(word, index) in wordList"
            :key="index"
          >
            {{ word.text }}
          </div>
        </div>
      </div>

      <div class="controls">
        <div class="liniar">
          <input
            ref="typeInput"
            v-model="message"
            class="type-input"
            placeholder="..."
            v-on:input="typing()"
          />
          <div class="timer-container">
            <div class="timer">{{ totalTime }}</div>
          </div>
          <div class="timer"></div>
          <button class="square-button" @click="restart()">
            <font-awesome-icon icon="redo-alt" />
          </button>
          <button class="square-button" @click="caseSensitiveToggle()">
            <font-awesome-icon icon="font" />
          </button>
          <button class="square-button" @click="SpecialCharsToggle()">
            <font-awesome-icon icon="exclamation" />
          </button>
        </div>
      </div>
      <div class="custome-text" :class="{ show: customOpen == true }">
        <textarea
          class="list-container"
          v-model="customText"
          placeholder="Add custom text to type"
        ></textarea>
        <br />
        <button class="save-button" @click="saveCustomText()">
          <font-awesome-icon icon="save" />
          <!-- <font-awesome-icon icon="redo-alt" /> -->
        </button>
      </div>
      <button class="toggle-custom" @click="toggleCustom()">
        Insert your own text
        <br />
        <font-awesome-icon v-if="!customOpen" icon="chevron-down" />
        <font-awesome-icon v-else rotation="180" icon="chevron-down" />
      </button>
      <div class="tree-boards">
        <div class="analytics">
          <h2>Most mastaken letters</h2>
          <button class="square-button" @click="restartErrorDict()">
            <font-awesome-icon icon="redo-alt" />
          </button>
          <div
            v-for="error in errorsList"
            v-bind:key="error.letter"
            class="errors-view"
          >
            <span>{{ error.letter }}</span> <span>{{ error.errors }}</span
            ><span>({{ error.wrongLetters[0].letter }})</span>
          </div>
        </div>
        <div></div>
        <div class="score-board">
          <h2>Current rate</h2>

          <div class="timer">{{ this.successWordsText.length / 4 }} WPM</div>
          <h2>Score board</h2>
          <div v-for="score in scores" v-bind:key="score" class="timer">
            {{ score }} WPM
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { WordList, ErrorsDict, WordStatus } from "../views/models";
import { checkSubWord, addError } from "../views/utils";

@Component
export default class Typing extends Vue {
  @Prop() private wordList!: WordList[];
  private message: string = "";
  private allText: string = "";
  private wordCount = 0;
  private lineHeight = 40;
  private wordListStyles = { top: "0px" };
  private tmpTop: number = 0;
  private currentTop: number = 0;
  private runOnlyOnce: boolean = true;
  private errorsDict: ErrorsDict[] = [];
  private errorsList: ErrorsDict[] = [];
  private letterInWord: number = 0;
  private currentWord: string = "";
  private successWords: number = 0;
  private successWordsText: string = "";
  private errrorWords: number = 0;
  private timer: undefined | any;
  private totalTime: number = 60;
  private running: boolean = false;
  private wordRef: any;
  private firstError: boolean = true;
  private tempMessage: string = "";
  scores: string[];
  customText: string = "";
  customOpen: boolean = false;
  constructor() {
      super();
  }

  created() {
      if (!this.errorsDict.length) {
          this.errorsDict = JSON.parse(
              localStorage.getItem("errorsAnalysis") || "[]"
          );
      }
      const scoreHistory = JSON.parse(
          localStorage.getItem("scoreHistory") || "[]"
      );
      this.scores = scoreHistory.reverse();
      this.wordRef = this.$refs.words;
  }

  mounted() {
      const typeInput = this.$refs.typeInput as HTMLElement;
      typeInput.focus();
      this.wordRef = this.$refs.words;
  }

  saveCustomText() {
      this.customText = this.customText.trim();
      const wordCount = this.customText.split(" ");
      console.log("w", wordCount);
      if (wordCount.length > 120) {
          localStorage.setItem("customText", this.customText);
      } else {
          alert(
              `You need to insert at least 120 words and you have entered ${wordCount.length}`
          );
      }
  }
  typing() {
      this.startTimer();
      this.letterInWord = this.message.length - 1;
      this.currentWord = this.wordList[this.wordCount].text;
      if (!this.message.trim().length) {
          this.message = "";
          return;
      }

      if (!checkSubWord(this.message, this.currentWord)) {
          this.wordList[this.wordCount].status = WordStatus.error;
          this.handelError();
      } else {
          this.wordList[this.wordCount].status = WordStatus.void;
          this.firstError = true;
      }

      //check if removing
      if (this.tempMessage.length > this.message.length) {
          this.tempMessage = this.message;
          return;
      }
      this.tempMessage = this.message;
      if (this.message.endsWith(" ")) {
          this._moveToNextWord(this.currentWord);
      }

      this.$nextTick(() => {
          const currentWordTop: number = this.wordRef[
              this.wordCount
          ].getBoundingClientRect().top;
          if (this.runOnlyOnce) {
              this.runOnlyOnce = false;
              this.tmpTop = currentWordTop;
          }

          if (this.tmpTop != currentWordTop) {
              this.currentTop += this.tmpTop - currentWordTop;
              this.wordListStyles.top = this.currentTop + "px";
          }
      });
  }

  _moveToNextWord(currentRightWord: string) {
      if (this.message.trim() == currentRightWord) {
          this.wordList[this.wordCount].status = WordStatus.success;
          this.successWords += 1;
          this.successWordsText += this.message;
      } else {
          this.wordList[this.wordCount].status = WordStatus.error;
          this.errrorWords += 1;
          this.handelError();
      }
      this.allText += this.message;
      this.message = "";
      this.wordList[this.wordCount].isActive = false;
      this.wordCount++;
      if (this.wordList.length > this.wordCount) {
          this.wordList[this.wordCount].isActive = true;
      } else {
          console.log("good game");
      }
      this.firstError = true;
  }

  handelError() {
      if (this.firstError) {
          addError(
              this.errorsDict,
              this.currentWord[this.letterInWord] || "",
              this.message[this.letterInWord]
          );
          localStorage.setItem("errorsAnalysis", JSON.stringify(this.errorsDict));
          this.firstError = false;
      }
      // console.log(this.errorsDict);
  }

  startTimer() {
      if (!this.running) {
          this.timer = setInterval(() => this.countdown(), 1000);
      }
      this.running = true;
  }

  countdown() {
      this.totalTime--;
      if (this.totalTime == 0) {
          this.gameOver();
      }
  }

  gameOver() {
      this.errorsList = this.errorsDict.map(error =>
          ErrorsDict.getMostMistakes(error)
      );
      this.errorsList.sort((e1, e2) => e2.errors - e1.errors);

      this.running = false;
      console.log("good game", this.successWords, this.errrorWords);
      this._clearTimer();
      const wpm = this.successWordsText.length / 4;
      alert(wpm);
      this.scores.push(String(wpm));

      const scoreHistory = JSON.parse(
          localStorage.getItem("scoreHistory") || "[]"
      );
      scoreHistory.push(wpm);
      localStorage.setItem("scoreHistory", JSON.stringify(scoreHistory));
  }
  toggleCustom() {
      this.customOpen = !this.customOpen;
  }
  restartErrorDict() {
      this.errorsList = [];
      this.errorsDict = [];
      localStorage.setItem("errorsAnalysis", JSON.stringify(this.errorsDict));
  }
  restart() {
      this.$emit("restart");
      this._clearVaribeles();
      // const typeInput = this.$refs.typeInput as HTMLElement;
      // typeInput.focus();
  }

  caseSensitiveToggle() {
      this.$emit("caseSensitiveToggle");
  }

  SpecialCharsToggle() {
      this.$emit("SpecialCharsToggle");
  }

  _clearVaribeles() {
      this.successWords = 0;
      this.errrorWords = 0;
      this.wordCount = 0;
      this.running = false;
      this.message = "";
      this.allText = "";
      this.tmpTop = 0;
      this.currentTop = 0;
      this.wordListStyles.top = "0px";
      this._clearTimer();
      this.running = true; // to recreate the list
  }

  _clearTimer() {
      this.totalTime = 60;
      clearInterval(this.timer);
  }
}
</script>
<style scoped lang="scss">
.typing {
  font-family: -webkit-body;

  &.rtl {
    direction: rtl;
  }
  .toggle-custom {
    border: None;
    background: None;
  }
  .custome-text {
    max-height: 0;
    margin-top: 30px;
    transition: max-height 0.15s ease-out;
    overflow: hidden;
    &.show {
      max-height: 150px;
    }
    .save-button {
      width: 30px;
      height: 30px;
      margin: 20px;
    }
  }
  .list-container {
    border: 1px solid #8eb6d8;
    background: white;
    width: 70%;
    margin: auto;
    overflow: hidden;
    height: 80px;
    .word-list {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      font-size: 30px;

      .word {
        margin-right: 5px;
        display: inline-flex;
        padding: 0 3px 0 3px;
      }
      .active {
        background: rgb(230, 230, 230);
        border-radius: 5px;
      }
      .error {
        color: rgb(193, 1, 1);
      }
      .success {
        color: rgb(92, 145, 7);
      }
    }
  }
  .controls {
    width: 70%;
    margin: auto;
    .liniar {
      background: #9ab5ce;
      margin-top: 10px;
      height: 68px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .type-input {
      font-size: 30px;
      border-radius: 3px;
      font-family: -webkit-body;
    }
    .timer-container {
      padding: 9px;
      margin: 5px;
      display: inline-flex;
      background: cadetblue;
      border-radius: 5px;
    }
    .square-button {
      border-radius: 5px;
      width: 40px;
      height: 40px;
      margin-left: 15px;
      border: 2px solid cadetblue;
    }
  }
  .tree-boards {
    display: inline-flex;
    width: 100%;
    > div {
      flex: 1;
    }

    .analytics {
      .errors-view:nth-child(-n + 4) {
        background-color: lightcyan;
        font-style: bold;
      }
    }
  }
}
</style>
