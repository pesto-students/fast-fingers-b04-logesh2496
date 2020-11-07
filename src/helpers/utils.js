import { DifficultyLevel } from "./enums";
const words = require("../dictionary.json");

export const getDifficultyValue = difficultyLevel => {
    switch (difficultyLevel) {
        case DifficultyLevel.EASY:
            return "EASY";
        case DifficultyLevel.MEDIUM:
            return "MEDIUM";
        case DifficultyLevel.HARD:
            return "Hard";
        default:
            return;
    }
}
export const setInLocalStorage = (items) => {
    localStorage.setItem('ff_history', JSON.stringify(items));
}
export const getFromLocalStorage = id => {
    return JSON.parse(localStorage.getItem(id));
}
const getWordLengthForDifficulty = (difficultyLevel) => {
    switch (difficultyLevel) {
        case DifficultyLevel.EASY:
            return { minWordLength: 2, maxWordLength: 4 };
        case DifficultyLevel.MEDIUM:
            return { minWordLength: 5, maxWordLength: 8 };
        case DifficultyLevel.HARD:
            return { minWordLength: 9, maxWordLength: 100 };
        default:
            return;
    }
}
export const getWordForDifficulty = (difficultyLevel) => {
    let word = '';
    const { minWordLength, maxWordLength } = getWordLengthForDifficulty(difficultyLevel);
    while (!(word.length >= minWordLength && word.length <= maxWordLength)) {
        const index = Math.floor(Math.random() * 172820 + 1);
        word = words[index];
    }
    return word;
}