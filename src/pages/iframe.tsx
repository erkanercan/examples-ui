import type { NextPage } from "next";

const Iframe: NextPage = () => {
  return (
    <>
      <iframe
        src={process.env.NEXT_PUBLIC_IFRAME_URL}
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
