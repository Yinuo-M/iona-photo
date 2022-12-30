import Head from 'next/head';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PhotoPage from '../../components/PhotoPage';
import portraits from '../../photoProps/portraitPhotos';

export default function Events() {
  return (
    <>
      <Head>
        <title>Iona Photography - Portraits</title>
        <meta
          name="description"
          content="Iona Shen's Portrait Photography Portfolio"
        />
      </Head>
      <Header />
      <PhotoPage title="Portraits" photos={portraits} />
      <Footer />
    </>
  );
}
