import { useWeb3React } from "@web3-react/core";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LPStakingSDK, {
  DefaultSupportedNetworks,
  DefaultSupportedProviders,
} from "@tokensuite/lp-staking-sdk";
import useConnectWallet, { CONNECTOR_NAMES } from "../hooks/use-connect-wallet";
import styles from "./index.module.css";

const Home: NextPage = () => {
  const { account, library } = useWeb3React();
  const { connect } = useConnectWallet();
  const { query } = useRouter();
  const [lpSDK, setLPSDK] = useState<LPStakingSDK | null>(null);
  const [adminAddress, setAdminAddress] = useState<string>("");

  useEffect(() => {
    console.log(query.lpStakingContractAddress);
  }, [query]);

  useEffect(() => {
    if (account && library) {
      const tempSDK = new LPStakingSDK({
        lpStakingContractAddress: query.lpStakingContractAddress as string,
        signer: library.getSigner(),
        network: DefaultSupportedNetworks.Rinkeby,
        provider: DefaultSupportedProviders.Alchemy,
      });
      setLPSDK(tempSDK);
    }
  }, [account, library, query.lpStakingContractAddress]);

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
      <ul>
        <li>
          {adminAddress && <span>Admin Address: {adminAddress}</span>}
          <button
            onClick={async () => {
              const adminAddress = (await lpSDK?.getAdmin()) as string;
              setAdminAddress(adminAddress);
            }}
          >
            Get Admin
          </button>
        </li>
      </ul>
    </>
  );
};

export default Home;
