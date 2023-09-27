import Link from 'next/link';

import styles from './styles.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Republic of&nbsp;Crimea</p>
      <Link href="mailto:info.duendestudio@gmail.com">
        <p className={styles.text}>info.duendestudio@gmail.com</p>
      </Link>

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
  );
}
