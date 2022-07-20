import { Provider } from '@nx-expo-nextjs/shared/provider';
import '@tamagui/core/reset.css';
import '@tamagui/font-inter/css/400.css';
import '@tamagui/font-inter/css/700.css';
import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme';
import Head from 'next/head';
import * as React from 'react';
import type { SolitoAppProps } from 'solito';

function CustomApp({ Component, pageProps }: SolitoAppProps) {
  const [theme, setTheme] = useRootTheme();

  const contents = React.useMemo(() => {
    return <Component {...pageProps} />;
  }, [pageProps]);

  return (
    <>
      <Head>
        <title>Tamagui Example</title>
        <meta
          name="description"
          content="Nx, Tamagui, Solito, Expo & Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextThemeProvider onChangeTheme={setTheme}>
        <Provider disableRootThemeClass defaultTheme={theme}>
          <main className="app" style={{ minHeight: '100vh', display: 'flex' }}>
            {contents}
          </main>
        </Provider>
      </NextThemeProvider>
    </>
  );
}

export default CustomApp;
