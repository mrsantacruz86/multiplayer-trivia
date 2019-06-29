import React from "react";

export default function ScoreCard(props) {
  const { playerName, score, turn } = props;

  const renderTurn = turn => {
    if (turn) {
      return <i className="fas fa-flag" />;
    } else {
      return <i className="far fa-flag" />;
    }
  };

  return (
    <div>
      <div>{playerName}</div>
      <div>{score}</div>
      <div>{renderTurn(turn)}</div>
    </div>
  );
}
