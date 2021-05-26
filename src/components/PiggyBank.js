import React from "react";

function PiggyBank({ amount, modifyAmount, title, index }) {
  return (
    <>
      <h2>{title}</h2>
      <input
        type="number"
        onChange={(e) => modifyAmount(e, index)}
        value={amount}
      />
    </>
  );
}

export default PiggyBank;
