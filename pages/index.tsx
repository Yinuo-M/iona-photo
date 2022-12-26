import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Iona Photography</title>
        <meta name="description" content="Iona Shen's Photography Portfolio" />
      </Head>
      <Header theme="light"/>
      <div className={styles.background} />
      <Footer theme="light" />
    </>
  );
}
