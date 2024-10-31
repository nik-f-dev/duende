import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';
import { fetchGoogleDriveData } from '@/utils/googleDriveApi';

export const metadata: Metadata = {
  title: 'Contact | Duende',
};

type DataProps = {
  email: string;
  links: {
    name: string;
    link: string;
    img: string;
  }[];
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
            {data.links && data.links.length > 0 ? (
              data.links.map((link, index) => (
                <Link
                  key={`${link.name}-${index}`}
                  href={link.link}
                  target="_blank"
                >
                  <Image
                    src={link.img}
                    alt={link.name}
                    className={styles.socialLink}
                    width={50}
                    height={50}
                    priority
                  />
                </Link>
              ))
            ) : (
              <p>Нет социальных ссылок.</p>
            )}
          </div>
        </>
      ) : (
        <p>Данные не найдены.</p>
      )}
    </div>
  );
}
