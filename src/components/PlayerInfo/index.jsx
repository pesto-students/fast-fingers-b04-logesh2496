import React from "react";
import { getDifficultyValue } from "../../helpers/utils";
import "./player-info.scss";

const PlayerInfo = (props) => {
  return (
    <>
      <div className="player-name">
        <img src="/images/ff_person.svg" alt="player" />
        {props.name}
      </div>
      <div className="level">
        <img src="/images/ff_gamepad.svg" alt="player" />
        level: {getDifficultyValue(props.level)}
      </div>
    </>
  );
};
export default PlayerInfo;
