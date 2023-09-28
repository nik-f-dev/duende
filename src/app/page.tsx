import Gallery from '@/components/Gallery';

import styles from './styles.module.css';

export default function Home() {
  return (
    <div className={styles.galleryWrapper}>
      <Gallery />
    </div>
  );
}
