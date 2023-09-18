// import Image from 'next/image';

import Navigation from '../Navigation';

import styles from './styles.module.css';

const navLinks = [
  {
    name: 'WORK',
    href: '/',
  },
  {
    name: 'ABOUT',
    href: '/about',
  },
  {
    name: 'CONTACT',
    href: '/contact',
  },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.navWrapper}>
        <img
          src="/images/blue-third-logo.png"
          alt="logo"
          className={styles.logo}
        />
        {/* <Image
            src="/images/blue-second-logo.png"
            quality={75}
            width={400}
            height={72}
            alt="logo"
          /> */}
        <nav className={styles.nav}>
          <Navigation navLinks={navLinks} />
        </nav>
      </div>
    </header>
  );
}
