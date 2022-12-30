import Head from 'next/head';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PhotoPage from '../../components/PhotoPage';
import travel from './photos';

export default function Events() {
  return (
    <>
      <Head>
        <title>Iona Photography - Travel</title>
        <meta
          name="description"
          content="Iona Shen's Travel Photography Portfolio"
        />
      </Head>
      <Header />
      <PhotoPage title="Travel" photos={travel} />
      <Footer />
    </>
  );
}
