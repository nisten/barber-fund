import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Head from 'next/head';

export default function Home() {
  return (
    <Row>
      <Head>
        <html lang="en-us" />
        <title>barberfund</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="barberfund" key="title"/>
        {/* <meta charSet="utf-8" /> */}
        <meta name="description" content="A hackathon app to help you pay it forward to your local barbershop" />
      </Head>

      <Image
        src="/barberfund.webp"
        alt="logo"
        style={{ width: '20%' }}
        fluid
      ></Image>

      <h3>Welcome to the barberfund</h3>
    </Row>
  );
}
