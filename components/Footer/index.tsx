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
          href="mailto:ionashenhanqi@gmail.com"
          className={`${styles.link} ${theme}`}
        >
          ionashenhanqi@gmail.com
        </a>
      </p>
    </footer>
  );
}
