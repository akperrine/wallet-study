import "./App.css";
import React from "react";

import Wallet from "./components/wallet/wallet";

function App() {
  const textRef = React.useRef(0);
  const [usDollar, setUsDollar] = React.useState(true);
  const [display, setDisplay] = React.useState(0.0);

  const onSubmit = (event) => {
    event.preventDefault();
    let inputValue = textRef.current.value;
    console.log(textRef, parseInt(inputValue), typeof parseInt(inputValue));
    if (typeof parseInt(inputValue) === "number") {
      if (usDollar) {
        const parsedInt = parseInt(inputValue);
        console.log(parsedInt);
        const peso = (parsedInt * 19.06).toFixed(2);
        setDisplay(peso);
      } else {
        const parsedInt = parseInt(inputValue);
        const dollar = (parsedInt / 19.06).toFixed(2);
        setDisplay(dollar);
      }
      setUsDollar(!usDollar);
    }
  };
  return (
    <div className="App">
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" ref={textRef} />
          <button type="submit">
            {usDollar ? "Convert to Pesos" : "Convert to US Dollars"}
          </button>
        </form>
      </div>
      <div>{display}</div>
      <Wallet />
    </div>
  );
}

export default App;
