import styles from './styles.module.css';

export default function Custom404() {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.heading}>404</h1>
      <div className={styles.headingWrapper}>
        <h2>This page could not be found.</h2>
      </div>
    </div>
  );
}
