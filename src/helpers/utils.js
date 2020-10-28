import { DifficultyLevel } from "./enums";

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