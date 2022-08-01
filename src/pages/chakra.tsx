import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  ChakraProvider,
  theme,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { GetServerSideProps, PageConfig } from "next";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

const cache = createCache({
  key: `chakra-cache`,
});

const Index = ({ runtime }) => (
  <CacheProvider value={cache}>
    <ChakraProvider theme={theme}>
      <Container height="100vh">
        <Hero />
        <Main>
          <Text color="text">
            Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code>{" "}
            + <Code>TypeScript</Code>, with the runtime {runtime}.
          </Text>

          <List spacing={3} my={0} color="text">
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              <ChakraLink
                isExternal
                href="https://chakra-ui.com"
                flexGrow={1}
                mr={2}
              >
                Chakra UI <LinkIcon />
              </ChakraLink>
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              <ChakraLink
                isExternal
                href="https://nextjs.org"
                flexGrow={1}
                mr={2}
              >
                Next.js <LinkIcon />
              </ChakraLink>
            </ListItem>
          </List>
        </Main>

        <DarkModeSwitch />
        <Footer>
          <Text>Next ❤️ Chakra</Text>
        </Footer>
        <CTA />
      </Container>
    </ChakraProvider>
  </CacheProvider>
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
