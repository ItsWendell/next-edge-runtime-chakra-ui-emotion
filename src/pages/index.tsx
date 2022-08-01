import { GetServerSideProps, PageConfig } from "next";
import { ThemeProvider } from "@emotion/react";
import { Animated, Basic, bounce, Combined } from "../styles";

const Index = ({ runtime }) => (
  <ThemeProvider
    theme={{
      colors: {
        primary: "hotpink",
      },
    }}
  >
    <div>
      <Basic>Cool Styles running on the runtime: {runtime}</Basic>
      <Combined>
        With <code>:hover</code>.
      </Combined>
      <Animated animation={bounce}>Let's bounce.</Animated>

    </div>
  </ThemeProvider>
);

export const config = {
  runtime: "experimental-edge",
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      runtime: process.env.NEXT_RUNTIME,
    },
  };
};

export default Index;
