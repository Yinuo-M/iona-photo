import Image, { StaticImageData } from 'next/image';
import styles from './Photo.module.scss';

export type PhotoProps = {
  src: StaticImageData | string;
  alt: string;
  orientation?: 'landscape' | 'portrait';
  priority?: boolean;
};

export default function Photo({
  src,
  alt,
  orientation = 'landscape',
  priority = true,
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
        quality={50}
      />
    </div>
  );
}
