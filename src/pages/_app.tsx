import '../styles/global.css';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

// noinspection JSUnusedGlobalSymbols
export default MyApp;
