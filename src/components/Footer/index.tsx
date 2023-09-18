import localFont from 'next/font/local';
import clsx from 'clsx';

import styles from './styles.module.css';
import Link from 'next/link';

const steppe = localFont({
  src: '../../../public/fonts/Steppe/Steppe.otf',
  weight: '400',
  style: 'normal',
});

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.border}></div>
      <div className={styles.container}>
        <div className={styles.rightWrapper}>
          <img
            src="/images/blue-second-logo.png"
            alt="footer-logo"
            className={styles.logo}
          />
          <p className={clsx(steppe.className, styles.right)}>
            ALL RIGHTS RESERVED / DUENDE /2023 &copy;
          </p>
        </div>
        <div className={styles.socialWrapper}>
          <Link href="/about">
            <img
              src="/images/facebook-logo.svg"
              alt="facebook-logo"
              className={styles.socialLink}
              width="32px"
              height="32px"
            />
          </Link>
          <Link href="/about">
            <img
              src="/images/instagram-logo.svg"
              alt="instagram-logo"
              className={styles.socialLink}
              width="32px"
              height="32px"
            />
          </Link>
          <Link href="/about">
            <img
              src="/images/linkedin-logo.svg"
              alt="linkedin-logo"
              className={styles.socialLink}
              width="32px"
              height="32px"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
