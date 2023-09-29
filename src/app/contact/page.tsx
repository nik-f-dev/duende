import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';

import InstagramIcon from '../../assets/instagram.svg';
import BehanceLogo from '../../assets/behance-logo.svg';

import styles from './styles.module.css';

export const metadata: Metadata = {
  title: 'Contact | Duende',
};

export default function Contact() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Republic of&nbsp;Crimea</p>
      <Link href="mailto:info@weareduende.com">
        <p className={styles.text}>info@weareduende.com</p>
      </Link>

      <div className={styles.socialWrapper}>
        <Link
          href="https://instagram.com/weareduende?igshid=MzRlODBiNWFlZA=="
          target="_blank"
        >
          <Image
            src={InstagramIcon}
            alt="instagram-logo"
            className={styles.socialLink}
            priority
          />
        </Link>
        <Link href="https://www.behance.net/weareduende" target="_blank">
          <Image
            src={BehanceLogo}
            alt="linkedin-logo"
            className={styles.socialLink}
            priority
          />
        </Link>
      </div>
    </div>
  );
}
