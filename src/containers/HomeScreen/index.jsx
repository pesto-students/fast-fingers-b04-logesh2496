import React from "react";
import { useDispatch } from "react-redux";
import { setUserScreen } from "../../actions";
import { screenInfo } from "../../helpers/enums";
import "./home-screen.scss";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const handleStartGame = () => {
    dispatch(setUserScreen(screenInfo.GAME));
  };
  return (
    <div className="f-home-screen">
      <img src="/images/ff_keyboard.svg" alt="keyboard" />
      <div className="header-content">fast fingers</div>
      <div className="sub-header">the ultimate typing game</div>
      <div className="input-wrapper">
        <input placeholder="TYPE YOUR NAME"></input>
      </div>
      <div className="difficulty-chooser">
        <select>
          <option>EASY</option>
          <option>MEDIUM</option>
          <option>HARD</option>
        </select>
      </div>
      <div className="start-game" tabIndex={0} onClick={handleStartGame}>
        {/* <div className="play-icon"></div> */}
        START GAME
      </div>
    </div>
  );
};
export default HomeScreen;
