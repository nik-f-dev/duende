'use client';

import Image from 'next/image';
import type { RenderPhotoProps } from 'react-photo-album';
import { useState } from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';
import { useInView } from 'react-intersection-observer';

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
        quality={25}
        {...{ alt, onClick }}
        onLoad={() => setIsLoading(false)}
      />
      <p className={clsx(styles.description)}>{alt}</p>
    </div>
  );
}
