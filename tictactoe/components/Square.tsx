import React from "react";
type Player = "X" | "O" | "BOTH" | null;

interface Props {
  winner: Player;
  value: Player;
  onClick: () => void;
}
const Square = ({ value, onClick, winner }: Props) => {
  if (!value) {
    return (
      <button onClick={onClick} className="btn" disabled={Boolean(winner)} />
    );
  } else {
    return (
      <button disabled className="btn">
        <p className="square-text">{value}</p>
      </button>
    );
  }
};

export default Square;
