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
          <Link href="/">
            <img
              src="/images/blue-second-logo.png"
              alt="footer-logo"
              className={styles.logo}
            />
          </Link>
          <p className={clsx(steppe.className, styles.right)}>
            ALL&nbsp;RIGHTS RESERVED&nbsp;/ DUENDE /2023&nbsp;&copy;
          </p>
        </div>
        <div className={styles.socialWrapper}>
          <Link href="https://www.facebook.com/" target="_blank">
            <img
              src="/images/facebook-logo.svg"
              alt="facebook-logo"
              className={styles.socialLink}
              width="32px"
              height="32px"
            />
          </Link>
          <Link href="https://www.instagram.com/" target="_blank">
            <img
              src="/images/instagram-logo.svg"
              alt="instagram-logo"
              className={styles.socialLink}
              width="32px"
              height="32px"
            />
          </Link>
          <Link href="https://www.linkedin.com/" target="_blank">
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
