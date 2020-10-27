import React from "react";
import "./end-score-board.scss";

const EndScoreBoard = ({ gameNo, score, isNewHighScore, onPlayAgain }) => {
  return (
    <div className="end-score-board">
      <div className="game-no">Score : Game {gameNo}</div>
      <div className="end-score">{score}</div>
      {isNewHighScore && <div className="new-high">New High Score</div>}
      <div className="play-again" tabIndex={0} onClick={onPlayAgain}>
        <img src="/images/ff_reload.svg" alt="reload" /> Play again
      </div>
    </div>
  );
};
export default EndScoreBoard;
