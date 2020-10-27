import React from "react";

const RenderWords = React.memo(({ word, inputWord }) => {
  return word.split("").map((char, i) => {
    if (char === inputWord[i]) {
      return (
        <span key={i} className="match">
          {char}
        </span>
      );
    } else if (inputWord[i]) {
      return (
        <span key={i} className="not-match">
          {char}
        </span>
      );
    } else {
      return <span key={i}>{char}</span>;
    }
  });
});
export default RenderWords;
