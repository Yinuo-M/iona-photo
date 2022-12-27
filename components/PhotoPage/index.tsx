import Photo, { PhotoProps } from '../Photo';
import styles from './PhotoPage.module.scss';

type Props = {
  title: string;
  description: string;
  photos: PhotoProps[];
};

export default function PhotoPage({ title, description, photos }: Props) {
  return (
    <section className={styles.container}>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul className={styles.photos}>
        {photos.map((photo, index) => (
          <li
            key={index}
            className={
              photo.orientation === 'portrait'
                ? styles.portraitPhoto
                : styles.photo
            }
          >
            <Photo {...photo} />
          </li>
        ))}
      </ul>
    </section>
  );
}
