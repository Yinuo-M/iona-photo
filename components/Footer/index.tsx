import styles from './Footer.module.scss';

type Props = {
  theme?: 'light' | 'dark';
};

export default function Footer({ theme = 'dark' }: Props) {
  return (
    <footer className={theme === 'dark' ? styles.footer : styles.lightFooter}>
      <p>
        Contact me at{' '}
        <a
          href="mailto:iona_shen@icloud.com"
          className={styles.link}
        >
          iona_shen@icloud.com
        </a>
      </p>
    </footer>
  );
}
