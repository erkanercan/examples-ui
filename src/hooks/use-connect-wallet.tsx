import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";

declare global {
  interface Window {
    ethereum: any;
  }
}

export enum CONNECTOR_NAMES {
  Injected = "Injected",
}

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

export const connectors: { [connectorName in CONNECTOR_NAMES]: any } = {
  [CONNECTOR_NAMES.Injected]: injected,
};

const useConnectWallet = () => {
  const { activate, deactivate } = useWeb3React();
  // const { closeModal } = useModalsStore();

  const connect = async (connectorID: CONNECTOR_NAMES) => {
    const connectorOrGetConnector = connectors[connectorID];
    console.log(connectorOrGetConnector);

    const connector =
      typeof connectorOrGetConnector !== "function"
        ? connectors[connectorID]
        : await connectorOrGetConnector();

    if (typeof connector !== "function" && connector) {
      await activate(connector, async () => {
        console.log("trying to connect");
      });
    }
  };
  const disconnect = () => {
    deactivate();
    localStorage.clear();
  };

  return { connect, disconnect };
};

export default useConnectWallet;
