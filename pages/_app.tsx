import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { CacheProvider, EmotionCache } from '@emotion/react';
import chakraTheme from '../theme/theme';
import createEmotionCache from '../styles/createEmotionCache';
import { AppProps } from 'next/app';

import { MoralisProvider } from "react-moralis";

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import Layout from '../components/layout';

const clientSideEmotionCache = createEmotionCache();

interface Props extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props : Props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const APP_ID : string = process.env.NEXT_PUBLIC_MORALIS_APP_ID || '';
  const SERVER_URL : string = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL || '';

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>RVPC NFT Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <MoralisProvider
        appId={APP_ID} 
        serverUrl={SERVER_URL}
      >
        <ChakraProvider theme={chakraTheme}>
          <Layout>
            <ColorModeScript initialColorMode={chakraTheme.config.initialColorMode} />
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </MoralisProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};