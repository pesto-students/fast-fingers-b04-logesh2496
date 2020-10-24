import { combineReducers } from "redux";
import { DifficultyLevel, screenInfo } from "../helpers/enums";

const currentUserScreen = (store, action) => {
  if (action.type === "USER_SCREEN") {
    return {
      value: action.value,
    };
  }
  return store || screenInfo.HOME;
};
const userProperties = (store, action) => {
  if (action.type === "USER_PROPERTIES") {
    return {
      value: action.value,
    };
  }
  return store || { difficultyLevel: DifficultyLevel.EASY };
};

export default combineReducers({
  currentUserScreen,
  userProperties,
});
