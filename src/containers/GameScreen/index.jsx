import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./game-screen.scss";
import PlayerInfo from "../../components/PlayerInfo";

const GameScreen = () => {
  const { difficultyLevel, userName } = useSelector(
    (state) => state.userProperties
  );
  return (
    <div className="game-screen">
      <div className="game-info">
        <div className="player-info">
          <PlayerInfo name={userName} level={difficultyLevel} />
        </div>
        <div className="score-board"></div>
        <div className="stop-game">x STOP GAME</div>
      </div>
      <div className="game-play">
        <div className="game-timer"></div>
        <div className="game-word"></div>
        <input></input>
      </div>
      <div className="game-score">
        <div>fast fingers</div>
        <div>SCORE: </div>
      </div>
    </div>
  );
};
export default GameScreen;
