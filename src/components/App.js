import React from "react";
import PiggyBank from "./PiggyBank";
import Transaction from "./Transaction";

function App() {
  const [piggybanks, setPiggybanks] = React.useState([]);

  const modifyAmount = (e, index) => {
    const value = e.target.value;

    // Modify the correct piggy bank
    const piggybanksCopy = [...piggybanks];
    piggybanksCopy[index].amount = value;

    // Substract/Add to the ingress/egresss accordingly
    const indexIngress = piggybanksCopy.findIndex((el) => el.ingress);
    if (piggybanksCopy[index].egress) {
      piggybanksCopy[indexIngress].amount -= value;
    }

    setPiggybanks(piggybanksCopy);
  };

  React.useEffect(function () {
    setPiggybanks([
      {
        title: "Banshino",
        amount: 150,
        ingress: true,
      },
      {
        title: "Para el patrón",
        amount: 5,
        egress: true,
      },
      {
        title: "Para comida",
        amount: 50,
        egress: true,
      },
    ]);
  }, []);

  return (
    <>
      {piggybanks.map((el, index) => (
        <PiggyBank
          key={index}
          index={index}
          modifyAmount={modifyAmount}
          {...el}
        />
      ))}
    </>
  );
}

export default App;
