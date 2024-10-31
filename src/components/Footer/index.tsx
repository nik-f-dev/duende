import Link from 'next/link';
import Image from 'next/image';
import InstagramIcon from '../../assets/instagram.svg';
import BehanceLogo from '../../assets/behance-logo.svg';
import styles from './styles.module.css';
import { fetchGoogleDriveData } from '@/utils/googleDriveApi';

export default async function Footer() {
  let since: string | null = null;

  try {
    const fetchedData = await fetchGoogleDriveData();
    since = fetchedData.since;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.border}></div>
      <div className={styles.container}>
        <div className={styles.rightWrapper}>
          <Link href="/">
            <Image
              src="/images/white-second-logo.png"
              alt="footer-logo"
              className={styles.logo}
              width={50}
              height={36}
              priority
            />
          </Link>
          <p className={styles.right}>
            ALL&nbsp;RIGHTS RESERVED&nbsp;/ DUENDE / {since}&nbsp;&copy;
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
              priority
            />
          </Link>
          <Link href="https://www.behance.net/weareduende" target="_blank">
            <Image
              src={BehanceLogo}
              alt="behance-logo"
              className={styles.socialLink}
              priority
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
