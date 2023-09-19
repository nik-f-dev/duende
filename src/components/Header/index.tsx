// import Image from 'next/image';

import Navigation from '../Navigation';

import navLinks from '@/data/navLinks';

import styles from './styles.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.navWrapper}>
        <img
          src="/images/blue-third-logo.png"
          alt="logo"
          className={styles.logo}
        />
        <nav className={styles.nav}>
          <Navigation navLinks={navLinks} />
        </nav>
      </div>
    </header>
  );
}
