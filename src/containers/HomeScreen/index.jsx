import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserScreen, setUserProperties } from "../../actions";
import { DifficultyLevel, screenInfo } from "../../helpers/enums";
import "./home-screen.scss";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [playerName, setPlayerName] = useState("");
  const [playerDifficulty, setPlayerDifficulty] = useState(
    DifficultyLevel.EASY
  );
  const [isInValid, setIsInValid] = useState(false);
  const handleStartGame = () => {
    if (!playerName || !playerName.length) {
      setIsInValid(true);
      return;
    }
    setIsInValid(false);
    dispatch(setUserProperties(playerName, parseInt(playerDifficulty)));
    dispatch(setUserScreen(screenInfo.GAME));
  };
  return (
    <div className="f-home-screen">
      <img src="/images/ff_keyboard.svg" alt="keyboard" />
      <div className="header-content">fast fingers</div>
      <div className="sub-header">the ultimate typing game</div>
      <div className={"input-wrapper" + (isInValid ? " invalid" : " valid")}>
        <input
          placeholder="TYPE YOUR NAME"
          onChange={(e) => setPlayerName(e.target.value)}
          value={playerName}
        ></input>
      </div>
      <div className="difficulty-chooser">
        <select
          onChange={(e) => {
            setPlayerDifficulty(parseInt(e.target.value));
          }}
        >
          <option value={DifficultyLevel.EASY}>EASY</option>
          <option value={DifficultyLevel.MEDIUM}>MEDIUM</option>
          <option value={DifficultyLevel.HARD}>HARD</option>
        </select>
      </div>
      <div
        className="start-game"
        tabIndex={0}
        onClick={handleStartGame}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleStartGame();
          }
        }}
      >
        <div className="play-icon"></div>
        START GAME
      </div>
    </div>
  );
};
export default HomeScreen;
