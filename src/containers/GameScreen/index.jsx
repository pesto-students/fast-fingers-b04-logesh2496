import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./game-screen.scss";
import PlayerInfo from "../../components/PlayerInfo";
import {
  DifficultyLevel,
  LocalStorageIds,
  screenInfo,
} from "../../helpers/enums";
import { setUserScreen, setUserHistory } from "../../actions";
import RenderWords from "../../components/RenderWords";
import GameScore from "../../components/GameScore";
import ScoreBoard from "../../components/ScoreBoard";
import EndScoreBoard from "../../components/EndScoreBoard";
import Timer from "../../components/Timer";
import {
  getFromLocalStorage,
  getWordForDifficulty,
  setInLocalStorage,
} from "../../helpers/utils";

const GameScreen = () => {
  const { difficultyLevel, userName } = useSelector(
    (state) => state.userProperties
  );
  const userHistory = useSelector((state) => state.userHistory);
  const multipleUsersHistoryFromDb =
    getFromLocalStorage(LocalStorageIds.HISTORY) || userHistory;
  const userHistoryFromDb = multipleUsersHistoryFromDb.filter(
    ({ name }) => userName === name
  );
  const dispatch = useDispatch();
  const [word, setWord] = useState("");
  const [inputWord, setInputWord] = useState("");
  const [timer, setTimer] = useState(null);
  const [totalTime, setTotalTime] = useState(null);
  const [difficultyFactor, setDifficultyFactor] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [isGameEnded, setIsGameEnded] = useState(false);

  const handleWordInputChange = (e) => {
    if (word === e.target.value.toUpperCase()) {
      setUserScore(userScore + Math.round(timer / 1000));
      setDifficultyFactor(difficultyFactor + 0.1);
      setInputWord("");
    } else {
      setInputWord(e.target.value.toUpperCase());
    }
  };
  const calculateAndSetWord = () => {
    const wordFromLibrary = getWordForDifficulty(difficultyLevel);
    setWord(wordFromLibrary);
    const calculatedTime = Math.round(
      wordFromLibrary.length / difficultyFactor
    );
    const finalTime = calculatedTime > 2 ? calculatedTime : 2;
    setTimer(finalTime * 1000);
    setTotalTime(finalTime);
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
      default:
        break;
    }
  };
  const onStopGame = () => {
    setIsGameEnded(true);
  };
  const onQuitGame = () => {
    const newHistory = multipleUsersHistoryFromDb.concat({
      name: userName,
      score: userScore,
    });
    dispatch(setUserHistory(newHistory));
    setInLocalStorage(newHistory);
    dispatch(setUserScreen(screenInfo.HOME));
  };
  const handleTimerTick = () => {
    if (timer === 0) {
      setIsGameEnded(true);
    } else if (timer > 0) {
      setTimer(timer - 10);
    }
  };
  const onPlayAgain = () => {
    resetGameState();
  };
  const checkIfHighScore = () => {
    if (!userHistoryFromDb.length) {
      return true;
    }
    return userHistoryFromDb.every(({ name, score }) => userScore > score);
  };
  const resetGameState = () => {
    const newHistory = userHistoryFromDb.concat({
      name: userName,
      score: userScore,
    });
    dispatch(setUserHistory(newHistory));
    setInLocalStorage(newHistory);
    setIsGameEnded(false);
    setTimer(null);
    setWord("");
    setInputWord("");
    setUserScore(0);
    setDifficultyFactor(null);
    setTimeout(() => calculateAndDifficultyFactor(), 0);
  };
  useEffect(() => {
    difficultyFactor && calculateAndSetWord();
    if (difficultyFactor === 1.5) {
      //TODO promoted to medium
    } else if (difficultyFactor === 2) {
      //TODO promoted to hard
    } else if (difficultyFactor === 2.5) {
      alert("Congrats, you have completed the challenge!!!");
    }
  }, [difficultyFactor]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    calculateAndDifficultyFactor();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    const timerEvent = setInterval(handleTimerTick, 10);
    return () => {
      clearTimeout(timerEvent);
    };
  }, [timer]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="game-screen">
      <div className="game-info">
        <div className="player-info">
          <PlayerInfo name={userName} level={difficultyLevel} />
        </div>
        {!isGameEnded && (
          <div className="score-board">
            <ScoreBoard history={userHistoryFromDb} userName={userName} />
          </div>
        )}
        {isGameEnded ? (
          <div className="quit" onClick={onQuitGame}>
            Quit
          </div>
        ) : (
          <div className="stop-game" onClick={onStopGame} tabIndex={0}>
            <span className={"close-icon"}>x</span> STOP GAME
          </div>
        )}
      </div>
      <div className="game-play">
        {isGameEnded ? (
          <>
            <EndScoreBoard
              gameNo={userHistoryFromDb.length + 1}
              score={userScore}
              isNewHighScore={checkIfHighScore()}
              onPlayAgain={onPlayAgain}
            />
            <div className="quit mobile" onClick={onQuitGame}>
              Quit
            </div>
          </>
        ) : (
          <>
            <div className="game-timer">
              <Timer timer={timer} totalTime={totalTime} />
            </div>
            <div className="game-word">
              <RenderWords word={word} inputWord={inputWord} />
            </div>
            <input
              autoFocus
              onChange={handleWordInputChange}
              value={inputWord}
            ></input>
            {isGameEnded ? (
          <div className="quit mobile" onClick={onQuitGame}>
            Quit
          </div>
        ) : (
          <div className="stop-game mobile" onClick={onStopGame} tabIndex={0}>
            <span className={"close-icon"}>x</span> STOP GAME
          </div>
        )}
          </>
        )}
      </div>
      <div className="game-score">
        <GameScore score={userScore} isGameEnded={isGameEnded} />
      </div>
    </div>
  );
};
export default GameScreen;
