import Image, { StaticImageData } from 'next/image';
import styles from './Photo.module.scss';

export type PhotoProps = {
  src: StaticImageData;
  alt: string;
  orientation?: 'landscape' | 'portrait';
  priority?: boolean;
};

export default function Photo({
  src,
  alt,
  orientation = 'landscape',
  priority = false,
}: PhotoProps) {
  return (
    <div
      className={
        orientation === 'landscape'
          ? styles.container
          : styles.portraitContainer
      }
    >
      <Image
        src={src}
        alt={alt}
        placeholder="blur"
        fill={true}
        priority={priority}
      />
    </div>
  );
}
