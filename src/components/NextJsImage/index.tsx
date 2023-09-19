import Image from 'next/image';
import type { RenderPhotoProps } from 'react-photo-album';
import { useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import localFont from 'next/font/local';
import { useInView } from 'react-intersection-observer';

import styles from './styles.module.css';

const steppe = localFont({
  src: '../../../public/fonts/Steppe/Steppe.otf',
  weight: '400',
  style: 'normal',
});

const imageVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function NextJsImage({
  photo,
  imageProps: { alt, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [onImage, setMouse] = useState(false);
  return (
    <motion.div
      ref={ref}
      style={{ ...wrapperStyle, position: 'relative' }}
      className={styles.imageOverlay}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      onMouseEnter={() => {
        setMouse(true);
      }}
      onMouseLeave={() => {
        setMouse(false);
      }}
      variants={imageVariants}
    >
      {inView ? (
        <Image
          fill
          sizes="75vw"
          src={photo}
          quality={70}
          {...{ alt, onClick }}
        />
      ) : null}
      <p
        className={
          onImage
            ? clsx(styles.description, steppe.className)
            : clsx(styles.description, styles.descriptionHide)
        }
      >
        {alt}
      </p>
    </motion.div>
  );
}
