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
        <h2>About Iona</h2>
        <div className={styles.infoWrapper}>
          <Image src={ionaPhoto} alt="Iona Shen" />
          <p>
            Iona is a highly skilled freelance photographer based in London,
            Oxford, and Cambridge. With a background in Theology and Religion,
            she brings a unique perspective to capturing love and beauty through
            her lens, specialising in portraits and event photography. She has
            served a diverse range of clients, including Oxford University Wine
            Society (Bacchus), Oxford University Contemporary Dance, the Oxford
            Belles, and the Oxford Centre for Hindu Studies. To inquire about
            collaboration opportunities, please feel free to contact Iona via
            email at{' '}
            <a href="mailto:iona_shen@icloud.com">iona_shen@icloud.com</a>.
          </p>
          {/* {!isMobile && (
            <Image
              src={ionaPhoto}
              alt="Iona Shen"
              priority={true}
              placeholder="blur"
            />
          )} */}
        </div>
        <div className={styles.letterWrapper}>
          <h3>A letter to the visitor...</h3>
          <p>Hello there,</p>
          <p>
            I am Iona, a UK based freelance photographer hoping to capture
            worldly love and beauty. Inspired by the ethereal nature of arthouse
            films and the timeless beauty of classical paintings, I am a seeker
            of light and colour in all things, be it the grace of sentient
            beings, the majesty of architecture, or the serenity of nature. For
            me, light manifests love, and colour embodies beauty. It is my
            sincerest aspiration to preserve moments of splendour that transcend
            both time and space.
          </p>
          <p>
            When collaborating with clients, I place the utmost importance on
            fostering a relaxed and friendly atmosphere. I take great care to
            get to know and understand each person I work with, so that the
            images I capture showcase their individuality. Conversely for event
            photography, I adopt a more unobtrusive approach, blending into the
            background to produce candid and genuine images that speak to the
            essence of the occasion. Over the course of four years, I have had
            the privilege of working with esteemed clients such as Keble College
            JCR, Oxford University Wine Society (Bacchus), Oxford University
            Contemporary Dance, the Oxford Belles, and the Oxford Centre for
            Hindu Studies.
          </p>
          <p>
            I am inspired by a multitude of acclaimed photographers,
            cinematographers, and artists, including Ho Fan 何藩, Sun Jun 孙军,
            Xiao Quan 肖全, Leslie Zhang JiaCheng 张家诚, Nobuyoshi Araki
            荒木経惟, Yoshihiko Ueda 上田義彦, Brassaï, Michael Kenna, Robert
            Frank, Alfred Stieglitz, Ron Fricke, Christopher Doyle, and
            Rembrandt.
          </p>
          <p>
            Should you be interested in collaborating with me, please do not
            hesitate to send me an email at{' '}
            <a href="mailto:iona_shen@icloud.com">iona_shen@icloud.com</a>. I am
            looking forward to seeing you through my lens :))
          </p>
          <p>
            Warm regards,
            <br />
            Iona
          </p>
        </div>
      </section>
    </>
  );
}
