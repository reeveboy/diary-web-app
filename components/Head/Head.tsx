import React, { ReactComponentElement, ReactElement, ReactNode } from "react";
import NextHead from "next/head";
import type { AppProps } from "next/app";

interface Props {
  children: ReactNode;
}

const Head = ({ children }: Props) => {
  return (
    <>
      <NextHead>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=KoHo:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </NextHead>
      <div className="flex h-screen">{children}</div>
    </>
  );
};

export default Head;
