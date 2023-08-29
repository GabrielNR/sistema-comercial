import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import { defaultTheme } from '../styles/themes/default'
// import { SessionProvider as NextAuthProvider } from 'next-auth/react'
import { ReactNode } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    // <NextAuthProvider session={pageProps.session}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />

        <Component {...pageProps} />
      </ThemeProvider>
      // </NextAuthProvider>
  )
}
