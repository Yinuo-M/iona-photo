import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import useMobile from '../../utils/useMobile';
import toggleScrollLock from '../../utils/toggleScrollLock';
import closeSvg from '../../public/icons/close.svg';
import darkHamburgerSvg from '../../public/icons/hamburger-dark.svg';
import lightHamburgerSvg from '../../public/icons/hamburger-light.svg';
import styles from './Header.module.scss';

type Props = {
  theme?: 'light' | 'dark';
};

export default function Header({ theme = 'dark' }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = (): void => {
    setIsOpen((prev) => !prev);
    toggleScrollLock();
  };
  const isMobile = useMobile();

  return (
    <header className={`${styles.header} ${theme}`}>
      <h1 className={theme === 'dark' ? styles.title : styles.lightTitle}>
        Iona Shen <br />
        Photography
      </h1>
      {(isOpen || !isMobile) && (
        <nav className={theme === 'dark' ? styles.nav : styles.lightNav}>
          <button onClick={toggleOpen} className={styles.close}>
            <Image src={closeSvg} alt="Close navigation" />
          </button>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/portraits">Portraits</Link>
            </li>
            <li>
              <Link href="travel">Travel</Link>
            </li>
          </ul>
        </nav>
      )}
      <button onClick={toggleOpen} className={styles.open}>
        <Image
          src={theme === 'dark' ? darkHamburgerSvg : lightHamburgerSvg}
          alt="Open navigation"
        />
      </button>
    </header>
  );
}
