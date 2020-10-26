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
    return {
      value: action.value,
    };
  }
  return (
    store || { difficultyLevel: DifficultyLevel.EASY, userName: "Arya_Stark" }
  );
};

export default combineReducers({
  currentUserScreen,
  userProperties,
});
