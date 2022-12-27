import Head from 'next/head';
import Image from 'next/image';

import Header from '../../components/Header';
import useMobile from '../../utils/useMobile';
import styles from './About.module.scss';
import ionaPhoto from '../../public/images/headshot.jpg';

export default function About() {
  const isMobile = useMobile();
  return (
    <>
      <Head>
        <title>Iona Photography - About</title>
        <meta name="description" content="About Iona Shen" />
      </Head>
      <Header />
      <section className={styles.container}>
        <h2>About me</h2>
        {isMobile && <Image src={ionaPhoto} alt="Iona Shen" />}
        <div className={styles.infoWrapper}>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut
              est nulla. Vivamus blandit nisl mollis, consectetur turpis a,
              tincidunt ipsum. Mauris eget ultrices dolor. Fusce ac ornare orci.
              Donec egestas lacus aliquet dolor finibus, et sollicitudin lectus
              aliquam. Nam elementum eget purus et viverra. Vivamus euismod,
              tellus ullamcorper volutpat euismod, lorem libero consequat ex, a
              rhoncus erat lorem id risus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut
              est nulla. Vivamus blandit nisl mollis, consectetur turpis a,
              tincidunt ipsum. Mauris eget ultrices dolor. Fusce ac ornare orci.
              Donec egestas lacus aliquet dolor finibus, et sollicitudin lectus
              aliquam. Nam elementum eget purus et viverra. Vivamus euismod,
              tellus ullamcorper volutpat euismod, lorem libero consequat ex, a
              rhoncus erat lorem id risus.
            </p>
            <p>
              You can contact me at{' '}
              <a href="mailto:ionashenhanqi@gmail.com">
                ionashenhanqi@gmail.com
              </a>
            </p>
          </div>
          {!isMobile && <Image src={ionaPhoto} alt="Iona Shen" />}
        </div>
      </section>
    </>
  );
}
