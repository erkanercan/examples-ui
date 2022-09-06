import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";

const MyApp: AppType = ({ Component, pageProps }) => {
  const getLibrary = (provider: any): ethers.providers.Web3Provider =>
    new ethers.providers.Web3Provider(provider);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
};

export default MyApp;
