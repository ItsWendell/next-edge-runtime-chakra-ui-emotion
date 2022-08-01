import { GetServerSideProps, PageConfig } from 'next'
import { ThemeProvider } from '@emotion/react'

const Index = ({ runtime }) => (
  <ThemeProvider theme={{}}>
    <div>Runtime: {runtime}</div>
  </ThemeProvider>
);

export const config = {
  runtime: 'experimental-edge',
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      runtime: process.env.NEXT_RUNTIME
    }
  }
}

export default Index;
