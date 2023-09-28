import Link from 'next/link';
import Image from 'next/image';

import InstagramIcon from '../../assets/instagram.svg';
import BehanceLogo from '../../assets/behance-logo.svg';

import styles from './styles.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.border}></div>
      <div className={styles.container}>
        <div className={styles.rightWrapper}>
          <Link href="/">
            <Image
              src="/images/blue-second-logo.png"
              alt="footer-logo"
              className={styles.logo}
              width={50}
              height={36}
            />
          </Link>
          <p className={styles.right}>
            ALL&nbsp;RIGHTS RESERVED&nbsp;/ DUENDE / 2023&nbsp;&copy;
          </p>
        </div>
        <div className={styles.socialWrapper}>
          <Link
            href="https://instagram.com/weareduende?igshid=MzRlODBiNWFlZA=="
            target="_blank"
          >
            <Image
              src={InstagramIcon}
              alt="instagram-logo"
              className={styles.socialLink}
            />
          </Link>
          <Link href="https://www.behance.net/weareduende" target="_blank">
            <Image
              src={BehanceLogo}
              alt="linkedin-logo"
              className={styles.socialLink}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
