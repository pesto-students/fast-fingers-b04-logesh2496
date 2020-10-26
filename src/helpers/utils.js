import { DifficultyLevel } from "./enums";

export const getDifficultyValue = difficultyLevel => {
    switch (difficultyLevel) {
        case DifficultyLevel.EASY:
            return "EASY";
        case DifficultyLevel.MEDIUM:
            return "MEDIUM";
        case DifficultyLevel.HARD:
            return "Hard";
    }
}