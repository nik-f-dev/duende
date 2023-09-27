import Image from 'next/image';
import type { RenderPhotoProps } from 'react-photo-album';
import { useState } from 'react';
import clsx from 'clsx';
import localFont from 'next/font/local';

import styles from './styles.module.css';
import { useInView } from 'react-intersection-observer';

const steppe = localFont({
  src: '../../../public/fonts/Steppe/Steppe.otf',
  weight: '400',
  style: 'normal',
});

export default function NextJsImage({
  photo,
  imageProps: { alt, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  const [isLoading, setIsLoading] = useState(true);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      style={{ ...wrapperStyle, position: 'relative' }}
      className={clsx(styles.imageOverlay)}
    >
      <Image
        className={clsx(styles.imageOverlay2, {
          [styles.show]: !isLoading && inView,
        })}
        fill
        sizes="100%"
        src={photo}
        quality={50}
        {...{ alt, onClick }}
        onLoadingComplete={() => setIsLoading(false)}
      />
      <p className={clsx(styles.description, steppe.className)}>{alt}</p>
    </div>
  );
}
