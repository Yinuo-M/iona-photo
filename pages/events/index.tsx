import Head from 'next/head';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PhotoPage from '../../components/PhotoPage';
import landscapePhoto from '../../public/images/landscape.jpg';
import portraitPhoto from '../../public/images/portrait.jpg';

const photo1 = {
  alt: `Iona's landscape photo`,
  src: landscapePhoto,
};

const photo2 = {
  alt: `Iona's portrait photo`,
  src: portraitPhoto,
  orientation: 'portrait',
};

const photos = [
  photo1,
  photo1,
  photo2,
  photo1,
  photo2,
  photo1,
  photo2,
  photo2,
  photo1,
  photo2,
  photo1,
  photo2,
  photo1,
  photo2,
  photo1,
  photo2,
];

export default function Events() {
  return (
    <>
      <Head>
        <title>Iona Photography - Events</title>
        <meta
          name="description"
          content="Iona Shen's Event Photography Portfolio"
        />
      </Head>
      <Header />
      <PhotoPage
        title="Events"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut est nulla. Vivamus blandit nisl mollis, consectetur turpis a, tincidunt ipsum. Mauris eget ultrices dolor. Fusce ac ornare orci. Donec egestas lacus aliquet dolor finibus, et sollicitudin lectus aliquam. Nam elementum eget purus et viverra. Vivamus euismod, tellus ullamcorper volutpat euismod, lorem libero consequat ex, a rhoncus erat lorem id risus."
        photos={photos}
      />
      <Footer />
    </>
  );
}
