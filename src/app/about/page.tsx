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
        <h2 className={styles.heading}>Hey there! We&nbsp;are Duende.</h2>
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
          creative team of&nbsp;artists who aspire to&nbsp;make their mark
          in&nbsp;the art of&nbsp;creating architectural images.
        </p>
        <p className={styles.text}>
          It&nbsp;is&nbsp;important for&nbsp;us to&nbsp;make each image special,
          attractive, and unique, leaving a&nbsp;pleasant aftertaste.
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
