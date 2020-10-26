import React from "react";

const GameScore = ({ score, isGameEnded }) => {
  return (
    <>
      <div>fast fingers</div>
      {!isGameEnded && <div className={"score"}>SCORE: {score}</div>}
    </>
  );
};

export default GameScore;
