import Document, { Html, Head, Main, NextScript } from "next/document";
import * as React from "react";
import { ColorModeScript } from "@chakra-ui/react";

export default class AppDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
