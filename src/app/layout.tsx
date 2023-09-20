import { Metadata } from 'next';
import localFont from 'next/font/local';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './globals.css';
import styles from './styles.module.css';

export const metadata: Metadata = {
  title: 'commercial',
};

const arodora = localFont({
  src: '../../public/fonts/Arodora/ArodoraProLight.otf',
  weight: '400',
  style: 'normal',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={arodora.className}>
      <body>
        <div className={styles.wrapper}>
          <Header />
          <main className={styles.childrenWrapper}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
