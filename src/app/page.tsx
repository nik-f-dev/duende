import GalleryData from '@/components/GalleryData';
import styles from './styles.module.css';

export default function Home() {
  return (
    <div className={styles.galleryWrapper}>
      <GalleryData />
    </div>
  );
}
