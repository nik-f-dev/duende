import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';

import InstagramIcon from '../../assets/instagram.svg';
import BehanceLogo from '../../assets/behance-logo.svg';

import { fetchGoogleDriveData } from '@/utils/googleDriveApi';

export const metadata: Metadata = {
  title: 'Contact | Duende',
};

type DataProps = {
  email: string;
  instagram: string;
  behance: string;
};

export default async function Contact() {
  let data: DataProps | null = null;

  try {
    data = await fetchGoogleDriveData();
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
  }

  return (
    <div className={styles.container}>
      {data ? (
        <>
          <Link href={`mailto:${data.email}`}>
            <p className={styles.text}>{data.email}</p>
          </Link>

          <div className={styles.socialWrapper}>
            <Link href={data.instagram} target="_blank">
              <Image
                src={InstagramIcon}
                alt="instagram"
                className={styles.socialLink}
                width={50}
                height={50}
                priority
              />
            </Link>

            <Link href={data.behance} target="_blank">
              <Image
                src={BehanceLogo}
                alt="behance"
                className={styles.socialLink}
                width={50}
                height={50}
                priority
              />
            </Link>
          </div>
        </>
      ) : (
        <p>нет данных</p>
      )}
    </div>
  );
}
