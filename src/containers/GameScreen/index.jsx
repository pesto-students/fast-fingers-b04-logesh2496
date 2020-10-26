import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./game-screen.scss";
import PlayerInfo from "../../components/PlayerInfo";
import { DifficultyLevel, screenInfo } from "../../helpers/enums";
import { setUserScreen, setUserUserProperties } from "../../actions";
const words = require("../../dictionary.json");

const GameScreen = () => {
  const { difficultyLevel, userName } = useSelector(
    (state) => state.userProperties
  );
  const dispatch = useDispatch();
  const [word, setWord] = useState("");
  const [inputWord, setInputWord] = useState("");
  const [timer, setTimer] = useState(null);
  const [difficultyFactor, setDifficultyFactor] = useState(null);
  const [userScore, setUserScore] = useState(0);

  const handleWordInputChange = (e) => {
    if (word === e.target.value) {
      setUserScore(userScore + timer);
      setDifficultyFactor(difficultyFactor + 0.1);
      setInputWord("");
    } else {
      setInputWord(e.target.value);
    }
  };
  const calculateAndSetWord = () => {
    const arrIndex = Math.floor(Math.random() * 100 + 1);
    const wordFromLibrary = words[arrIndex];
    setWord(wordFromLibrary);
    setTimer(Math.round(wordFromLibrary.length / difficultyFactor));
  };
  const calculateAndDifficultyFactor = () => {
    switch (difficultyLevel) {
      case DifficultyLevel.EASY:
        setDifficultyFactor(1);
        break;
      case DifficultyLevel.MEDIUM:
        setDifficultyFactor(1.5);
        break;
      case DifficultyLevel.HARD:
        setDifficultyFactor(2);
        break;
    }
  };
  const onStopGame = () => {
    dispatch(setUserScreen(screenInfo.HOME));
  };
  const handleTimerTick = () => {
    if (timer === 0) {
      alert("Game ended");
    } else if (timer > 0) {
      setTimer(timer - 1);
    }
  };
  useEffect(() => {
    calculateAndSetWord();
    if (difficultyFactor === 1.5) {
      //TODO promoted to medium
    } else if (difficultyFactor === 2) {
      //TODO promoted to hard
    } else if (difficultyFactor === 2.5) {
      //TODO end game
    }
  }, [difficultyFactor]);
  useEffect(() => {
    calculateAndDifficultyFactor();
  }, []);
  useEffect(() => {
    const timerEvent = setInterval(handleTimerTick, 1000);
    return () => {
      clearTimeout(timerEvent);
    };
  }, [timer]);
  return (
    <div className="game-screen">
      <div className="game-info">
        <div className="player-info">
          <PlayerInfo name={userName} level={difficultyLevel} />
        </div>
        <div className="score-board">
          <div className="header">SCORE BOARD</div>
        </div>
        <div className="stop-game" onClick={onStopGame} tabIndex={0}>
          x STOP GAME
        </div>
      </div>
      <div className="game-play">
        <div className="game-timer">{timer}</div>
        <div className="game-word">{word}</div>
        <input
          autoFocus
          onChange={handleWordInputChange}
          value={inputWord}
        ></input>
      </div>
      <div className="game-score">
        <div>fast fingers</div>
        <div>SCORE: {userScore}</div>
      </div>
    </div>
  );
};
export default GameScreen;
