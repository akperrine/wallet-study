import React from "react";

import WalletDisplay from "./walletDisplay/walletDisplay";

const Wallet = () => {
  const [wallet, setWallet] = React.useState([1, 2, 3, 88]);

  const walletTotal = wallet.reduce((sum, current) => sum + current, 0);

  return (
    <div>
      <h3>My wallet</h3>
      <div className="wallet-display"></div>
      <input />
      <button>Add to wallet</button>
      {wallet.map((item) => (
        <WalletDisplay key={item.toString()} walletItem={item} />
      ))}
      <h5>Wallet Total</h5>
      <div>{walletTotal}</div>
    </div>
  );
};

export default Wallet;
