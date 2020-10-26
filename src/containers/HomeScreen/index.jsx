import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserScreen, setUserUserProperties } from "../../actions";
import { DifficultyLevel, screenInfo } from "../../helpers/enums";
import "./home-screen.scss";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { userName, difficultyLevel } = useSelector(
    (state) => state.userProperties
  );
  const handleStartGame = () => {
    dispatch(setUserScreen(screenInfo.GAME));
  };
  return (
    <div className="f-home-screen">
      <img src="/images/ff_keyboard.svg" alt="keyboard" />
      <div className="header-content">fast fingers</div>
      <div className="sub-header">the ultimate typing game</div>
      <div className="input-wrapper">
        <input
          placeholder="TYPE YOUR NAME"
          onBlur={(e) =>
            dispatch(setUserUserProperties(e.target.value, difficultyLevel))
          }
        ></input>
      </div>
      <div className="difficulty-chooser">
        <select
          onChange={(e) =>
            dispatch(setUserUserProperties(userName, e.target.value))
          }
        >
          <option value={DifficultyLevel.EASY}>EASY</option>
          <option value={DifficultyLevel.MEDIUM}>MEDIUM</option>
          <option value={DifficultyLevel.HARD}>HARD</option>
        </select>
      </div>
      <div className="start-game" tabIndex={0} onClick={handleStartGame}>
        <div className="play-icon"></div>
        START GAME
      </div>
    </div>
  );
};
export default HomeScreen;
