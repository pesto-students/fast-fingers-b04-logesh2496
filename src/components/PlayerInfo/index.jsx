import React from "react";
import "./player-info.scss";

const PlayerInfo = (props) => {
  return (
    <>
      <div className="player-name">{props.name}</div>
      <div className="level">level{props.level}</div>
    </>
  );
};
export default PlayerInfo;
