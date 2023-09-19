import Image from 'next/image';
import type { RenderPhotoProps } from 'react-photo-album';
import { motion } from 'framer-motion';
import localFont from 'next/font/local';

import styles from './styles.module.css';
import { useState } from 'react';
import clsx from 'clsx';

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
  imageProps: { alt },
  wrapperStyle,
}: RenderPhotoProps) {
  const [onImage, setMouse] = useState(false);
  console.log(photo);
  return (
    <motion.div
      style={{ ...wrapperStyle, position: 'relative' }}
      className={styles.imageOverlay}
      variants={imageVariants}
      initial="hidden"
      animate="visible"
      onMouseEnter={() => {
        setMouse(true);
      }}
      onMouseLeave={() => {
        setMouse(false);
      }}
    >
      <Image fill src={photo} quality={75} {...{ alt }} />
      <motion.p
        className={
          onImage
            ? clsx(styles.description, steppe.className)
            : clsx(styles.description, styles.descriptionHide)
        }
      >
        {alt}
      </motion.p>
    </motion.div>
  );
}
