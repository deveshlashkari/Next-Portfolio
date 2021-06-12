import React from "react";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Head>
        <meta property="og:title" content="Devesh Lashkari" key="title" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
