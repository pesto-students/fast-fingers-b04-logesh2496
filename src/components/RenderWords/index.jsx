import React from "react";

const RenderWords = React.memo(({ word, inputWord }) => {
  return word.split("").map((char, i) => {
    if (char === inputWord[i]) {
      return <span className="match">{char}</span>;
    } else if (inputWord[i]) {
      return <span className="not-match">{char}</span>;
    } else {
      return <span>{char}</span>;
    }
  });
});
export default RenderWords;
