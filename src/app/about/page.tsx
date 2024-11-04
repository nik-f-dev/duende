import { Metadata } from 'next';
import Image from 'next/image';
import styles from './styles.module.css';
import { fetchGoogleDriveData } from '@/utils/googleDriveApi';

export const metadata: Metadata = {
  title: 'About | Duende',
};

type DataProps = {
  about_text: {
    title: string;
    description: string[];
  };
  about_images: {
    id: string;
    alt: string;
    src: string;
  }[];
};

export default async function About() {
  let data: DataProps | null = null;

  try {
    data = await fetchGoogleDriveData();
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
  }

  return (
    <div className={styles.container}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>{data?.about_text.title}</h2>
      </div>
      <div className={styles.photoWrapper1}>
        {data?.about_images && data.about_images.length > 0 && (
          <Image
            src={data.about_images[0].src}
            width={300}
            height={300}
            quality={100}
            alt={data.about_images[0].alt}
            className={styles.photo}
            priority
          />
        )}
      </div>
      <div className={styles.aboutWrapper}>
        {data?.about_text.description.map((text, index) => (
          <p key={index} className={styles.text}>
            {text}
          </p>
        ))}
      </div>
      <div className={styles.photoWrapper2}>
        {data?.about_images && data.about_images.length > 1 && (
          <Image
            src={data.about_images[1].src}
            width={300}
            height={300}
            quality={100}
            alt={data.about_images[1].alt}
            className={styles.photo}
            priority
          />
        )}
      </div>
    </div>
  );
}

export const dynamic = 'force-dynamic';
