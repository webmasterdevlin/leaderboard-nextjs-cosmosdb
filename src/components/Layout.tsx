import React, { ReactNode } from "react";
import Head from "next/head";
import { Box, Container } from "@mui/material";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <Box mb={5}>{children}</Box>
      </Container>
    </>
  );
};

export default Layout;
