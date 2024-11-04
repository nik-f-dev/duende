import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';

import InstagramIcon from '../../assets/instagram.svg';
import BehanceLogo from '../../assets/behance-logo.svg';

import { fetchGoogleDriveData } from '@/utils/googleDriveApi';

type FooterDataProps = {
  instagram: string;
  behance: string;
  since: string;
};

export default async function Footer() {
  let data: FooterDataProps | null = null;

  try {
    data = await fetchGoogleDriveData();
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
            ALL&nbsp;RIGHTS RESERVED&nbsp;/ DUENDE / {data?.since || '2024'}
            &nbsp;&copy;
          </p>
        </div>
        <div className={styles.socialWrapper}>
          {data && (
            <>
              <Link href={data.instagram} target="_blank">
                <Image
                  src={InstagramIcon}
                  alt="instagram-logo"
                  className={styles.socialLink}
                  width={50}
                  height={50}
                  priority
                />
              </Link>
              <Link href={data.behance} target="_blank">
                <Image
                  src={BehanceLogo}
                  alt="behance-logo"
                  className={styles.socialLink}
                  width={50}
                  height={50}
                  priority
                />
              </Link>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}

export const dynamic = 'force-dynamic';
