import { combineReducers } from "redux";
import { DifficultyLevel, screenInfo } from "../helpers/enums";

const currentUserScreen = (store, action) => {
  if (action.type === "USER_SCREEN") {
    return {
      value: action.value,
    };
  }
  return store || { value: screenInfo.HOME };
};
const userProperties = (store, action) => {
  if (action.type === "USER_PROPERTIES") {
    return action.value;
  }
  return store || { difficultyLevel: DifficultyLevel.EASY, userName: "YOLO" };
};
const userHistory = (store, action) => {
  if (action.type === "USER_HISTORY") {
    return action.value;
  }
  return store || [];
};
export default combineReducers({
  currentUserScreen,
  userProperties,
  userHistory,
});
