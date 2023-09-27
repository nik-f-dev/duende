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
            ALL&nbsp;RIGHTS RESERVED&nbsp;/ DUENDE / 2023&nbsp;&copy;
          </p>
        </div>
        <div className={styles.socialWrapper}>
          <Link
            href="https://instagram.com/weareduende?igshid=MzRlODBiNWFlZA=="
            target="_blank"
          >
            <img
              src="/images/instagram.svg"
              alt="instagram-logo"
              className={styles.socialLink}
            />
          </Link>
          <Link href="https://www.behance.net/weareduende" target="_blank">
            <img
              src="/images/behance-logo.svg"
              alt="linkedin-logo"
              className={styles.socialLink}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
