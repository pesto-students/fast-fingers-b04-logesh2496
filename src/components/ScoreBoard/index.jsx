import React from "react";
import "./score-board.scss";

const getMaxIndex = (list) => {
  const index = list.findIndex((currentValue, index, arr) => {
    return (
      currentValue.score === Math.max(...arr.map(({ name, score }) => score))
    );
  });
  return index;
};
const ScoreBoard = ({ history }) => {
  const maxIndex = getMaxIndex(history);
  return (
    <>
      <div className="header">SCORE BOARD</div>
      <div className="scrollable">
        {history.map(({ name, score }, i) => (
          <div key={i} className="history-info">
            {history.length > 1 && maxIndex === i && (
              <div className="best">personal best</div>
            )}
            <div className="score">
              Game {i + 1} : {score}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default ScoreBoard;
