import { useWeb3React } from "@web3-react/core";
import type { NextPage } from "next";
import useConnectWallet, { CONNECTOR_NAMES } from "../hooks/use-connect-wallet";
import styles from "./index.module.css";

const Home: NextPage = () => {
  const { activate, account } = useWeb3React();
  const { connect, disconnect } = useConnectWallet();

  return (
    <>
      <button onClick={() => connect(CONNECTOR_NAMES.Injected)}>
        Connect Wallet
      </button>
      <p>
        {account ? (
          <span>Connected to {account}</span>
        ) : (
          <span>Not connected</span>
        )}
      </p>
    </>
  );
};

export default Home;
