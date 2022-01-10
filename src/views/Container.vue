<template>
  <div class="container">
    <h1>TyPersistence</h1>
    <Typing
      v-if="reset"
      :wordList="wordList"
      @restart="restart()"
      @caseSensitiveToggle="setCaseSenetive(!caseSensetive)"
      @SpecialCharsToggle="SpecialCharsToggle(!specialChars)"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
    WordList,
    WORDS,
    DELEMITER,
    SHUFFLE
} from "./models";

import { addError, checkSubWord } from "./utils";
import Typing from "../components/Typing.vue";

@Component
export default class Container extends Vue {
    private wordList: WordList[];
    private reset: boolean = true;
    private caseSensetive: boolean = true;
    private specialChars: boolean = true;
    customText: string;

    constructor() {
        super();
        this.customText = localStorage.getItem("customText");
        this._prepareWordList();
        console.log(this.wordList);
    }

    created() {
        console.log("created");
        this.checkPersistence();
    }

    shuffle(array: string[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    checkPersistence() {
        const lastConnected = localStorage.getItem("lastConnectedDay");
        const currentTime = new Date();
        localStorage.setItem("lastConnectedDay", JSON.stringify(currentTime));
        let lastConnectedDate: Date = new Date();
        if (lastConnected) {
            lastConnectedDate = new Date(JSON.parse(lastConnected));
        } else {
            return;
        }
        const daysPassed = Math.round(
            (+currentTime - +lastConnectedDate) / (1000 * 60 * 60 * 24)
        );
        console.log(daysPassed, lastConnected, lastConnectedDate, +currentTime);
        if (daysPassed > 3) {
            alert(
                `${daysPassed} days passed since you last practice, come more often`
            );
        } else {
            console.log(`Well done, keep practice`);
        }
    }

    restart() {
        this.reset = !this.reset;
        this._prepareWordList();
        this.setCaseSenetive(this.caseSensetive);
        setTimeout(_ => (this.reset = !this.reset), 1);
    }

    setCaseSenetive(sensetive: boolean) {
        this.caseSensetive = !this.caseSensetive;

        if (sensetive) {
            this._prepareWordList();
        } else {
            this.wordList = this.wordList.map(word => {
                return { ...word, text: word.text.toLowerCase() };
            });
        }
    }

    SpecialCharsToggle(special: boolean) {
        this.specialChars = !this.specialChars;

        if (special) {
            this._prepareWordList();
        } else {
            this.wordList = this.wordList.map(word => {
                return { ...word, text: word.text.replace(/[^a-zA-Z]/gm, "") };
            });
            this.wordList = this.wordList.filter(word => word.text.trim().length);
        }
    }

    _prepareWordList() {
        let wordsToProcess = "";
        if (this.customText && this.customText.length) {
            wordsToProcess = this.customText;
        } else {
            wordsToProcess = WORDS;
        }
        const splittedWords = wordsToProcess
            .split(DELEMITER)
            .filter(word => word.trim());
        this.wordList = SHUFFLE
            ? this.shuffle(splittedWords).map(word => new WordList(word))
            : splittedWords.map(word => new WordList(word));
        this.wordList[0].isActive = true;
    }
}
</script>
<style scoped lang="scss">
.container {
  background: aliceblue;
  height: 100%;
}
</style>
