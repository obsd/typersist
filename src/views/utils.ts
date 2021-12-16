import { Mistake, ErrorsDict } from "./models";

export function addError(
  rightOnes: ErrorsDict[],
  correct: string,
  mistake: string = ""
) {
  console.log(rightOnes);
  const existingLetter = rightOnes.find(
    rightLetter => rightLetter.letter == correct
  );
  if (existingLetter) {
    existingLetter.errors += 1;
    addMistake(existingLetter.wrongLetters, mistake);
  } else {
    rightOnes.push(new ErrorsDict(correct, mistake));
  }
}

export function addMistake(wrongLetters: Mistake[], letter: string) {
  const existingLetter = wrongLetters.find(
    wrongLetter => wrongLetter.letter == letter
  );
  if (existingLetter) {
    existingLetter.error += 1;
  } else {
    wrongLetters.push(new Mistake(letter));
  }
}
export function checkSubWord(subWord: string, word: string) {
  subWord = subWord.trim();
  const len = subWord.length;
  if (len > word.length) {
    return false;
  } else {
    return subWord == word.substring(0, len);
  }
}
