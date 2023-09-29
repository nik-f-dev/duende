import { Metadata } from 'next';
import Image from 'next/image';

import styles from './styles.module.css';

import photo1 from '../../../public/images/photo1.jpg';
import photo2 from '../../../public/images/photo2.jpg';

export const metadata: Metadata = {
  title: 'About | Duende',
};

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>Hi! We&nbsp;are Duende team.</h2>
      </div>
      <div className={styles.photoWrapper1}>
        <Image
          src={photo2}
          width={300}
          height={300}
          alt="our team"
          className={styles.photo}
          priority
        />
      </div>
      <div className={styles.aboutWrapper}>
        <p className={styles.text}>
          Duende&nbsp;&mdash; is&nbsp;a&nbsp;small but very hardworking and
          creative group of&nbsp;artists who strive to&nbsp;bring our word
          to&nbsp;the art of&nbsp;architectural image making.
        </p>
        <p className={styles.text}>
          For&nbsp;us it&rsquo;s important to&nbsp;make each and every image
          special, attractive and unique, that&rsquo;ll leave a&nbsp;pleasant
          aftertaste.
        </p>
      </div>
      <div className={styles.photoWrapper2}>
        <Image
          src={photo1}
          width={300}
          height={300}
          alt="our team"
          className={styles.photo}
          priority
        />
      </div>
    </div>
  );
}
