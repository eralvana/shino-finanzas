import React from "react";

function Transaction({ titleE, indexE, amount, titleI, indexI }) {
  return (
    <>
      <h2>{titleE}</h2>
      <input
        type="number"
        value={amount}
      />
      <h2>{titleI}</h2>
    </>
  );
}

export default Transaction;
