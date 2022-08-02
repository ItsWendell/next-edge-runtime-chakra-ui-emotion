import { GetServerSideProps } from "next";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { Animated, Basic, bounce, Combined } from "../styles";
import createCache from "@emotion/cache";
import Link from "next/link";

const Index = (props: { runtime?: string; isServer?: boolean }) => (
  <ThemeProvider
    theme={{
      colors: {
        primary: "hotpink",
      },
    }}
  >
    <div>
      <Basic>
        Cool Styles using Emotion running on the{" "}
        {props.isServer ? (
          <>
            <b>server</b> with the <b>{props.runtime}</b> runtime
          </>
        ) : (
          <b>client</b>
        )}
        !
      </Basic>
      <Combined>
        With <code>:hover</code>.
      </Combined>
      <Animated animation={bounce}>Let's bounce.</Animated>
    </div>
    <div>
      <Link passHref href="/chakra">
        <a>Visit Chakra demo</a>
      </Link>
    </div>
  </ThemeProvider>
);

export const config = {
  runtime: "experimental-edge",
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      isServer: true,
      runtime: process.env.NEXT_RUNTIME,
    },
  };
};

export default Index;
