import 'normalize.css';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { removeScrollLock } from '../utils/toggleScrollLock';
import Head from 'next/head';
import { EB_Garamond } from '@next/font/google';

import '../styles/globals.scss';

const ebGaramond = EB_Garamond({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => removeScrollLock(), [Component]);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={ebGaramond.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
