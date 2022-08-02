import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  ChakraProvider,
  theme,
  Divider,
  Heading,
  Highlight,
  Mark,
  Box,
  Button,
  Stack,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { GetServerSideProps, PageConfig } from "next";
import { useState } from "react";
import Link from "next/link";

const Index = (props: {
  runtime?: string;
  isServer?: boolean;
  url?: string;
}) => {
  return (
    <ChakraProvider theme={theme}>
      <Container height="100vh">
        <Hero />
        <Main>
          <Box>
            <Heading as="h1" fontWeight="bold" fontSize="3xl" color="text">
              Example repository of
            </Heading>
            <Text mt={2} fontWeight={"black"} fontSize="5xl">
              {" "}
              <Mark bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
                Next.js
              </Mark>{" "}
              +{" "}
              <Mark bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
                Chakra-UI
              </Mark>{" "}
              +{" "}
              <Mark bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
                TypeScript
              </Mark>
            </Text>
          </Box>

          <Text>
            This page is rendered on the{" "}
            {props.isServer ? (
              <>
                <b>server</b> with the <b>{props.runtime}</b> runtime
              </>
            ) : (
              <b>client</b>
            )}
            !
          </Text>

          <Stack direction="row">
            <Button
              variant="solid"
              colorScheme="blue"
              as="a"
              href={
                props.url ?? typeof window !== "undefined"
                  ? window.location.href
                  : "#"
              }
            >
              Reload
            </Button>
            <Link href="/" passHref>
              <Button variant="outline" colorScheme="blue" as="a">
                Back to emotion demo
              </Button>
            </Link>
          </Stack>
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
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              <ChakraLink
                isExternal
                href="https://emotion.sh/"
                flexGrow={1}
                mr={2}
              >
                Emotion <LinkIcon />
              </ChakraLink>
            </ListItem>
            <Divider />
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              <ChakraLink
                isExternal
                href="https://nextjs.org/docs/advanced-features/react-18/switchable-runtime"
                flexGrow={1}
                mr={2}
              >
                Next.js Edge Runtime <LinkIcon />
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
  );
};

export const config = {
  runtime: "experimental-edge",
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      url: ctx.req.url,
      isServer: true,
      runtime: process.env.NEXT_RUNTIME,
    },
  };
};

export default Index;
