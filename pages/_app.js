import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import Nav from '../components/nav';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <title>Luthier</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <Nav />
      </header>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
