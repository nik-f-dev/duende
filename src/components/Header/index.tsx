// import Image from 'next/image';

import Navigation from '../Navigation';

import navLinks from '@/data/navLinks';

import styles from './styles.module.css';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.navWrapper}>
        <Image
          src="/images/blue-third-logo.png"
          alt="logo"
          className={styles.logo}
          width={400}
          height={72}
        />
        <nav className={styles.nav}>
          <Navigation navLinks={navLinks} />
        </nav>
      </div>
    </header>
  );
}
