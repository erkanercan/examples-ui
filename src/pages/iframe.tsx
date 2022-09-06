import type { NextPage } from "next";
import { useEffect } from "react";

const Iframe: NextPage = () => {
  useEffect(() => {
    console.log(
      `${process.env.NEXT_PUBLIC_IFRAME_URL}?lpStakingContractAddress=${process.env.NEXT_PUBLIC_LP_STAKING_CONTRACT_ADDRESS}`
    );
  }, []);
  return (
    <>
      <iframe
        src={`${process.env.NEXT_PUBLIC_IFRAME_URL}?lpStakingContractAddress=${process.env.NEXT_PUBLIC_LP_STAKING_CONTRACT_ADDRESS}`}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          minHeight: "100vh",
        }}
      />
    </>
  );
};

export default Iframe;
