import { Html, Head, Main, NextScript } from 'next/document'

import { ColorModeScript } from '@chakra-ui/react'
import chakraTheme from '../theme/theme';

export default function Document() {
  return (
    <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />  
        </Head>
        <body>
            <Main />
            <NextScript />
            <ColorModeScript initialColorMode={chakraTheme.config.initialColorMode} />
        </body>
    </Html>
  )
}