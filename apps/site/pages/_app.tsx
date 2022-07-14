import { Provider } from '@nx-expo-nextjs/provider';
import { AppProps } from 'next/app';
import Head from 'next/head';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to site!</title>
      </Head>
      <Provider>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </Provider>
    </>
  );
}

export default CustomApp;
