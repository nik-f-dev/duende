'use client';

import { useState } from 'react';

import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';

import NextJsImage from '../NextJsImage';

import 'yet-another-react-lightbox/styles.css';

type GalleryProps = {
  photos: { src: string; alt: string; width: number; height: number }[];
};

export default function Gallery({ photos }: GalleryProps) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <PhotoAlbum
        layout="columns"
        columns={(containerWidth) => {
          if (containerWidth < 550) return 1;
          if (containerWidth < 800) return 2;
          if (containerWidth < 2000) return 3;
          return 4;
        }}
        photos={photos}
        spacing={0}
        renderPhoto={NextJsImage}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        styles={{ container: { backgroundColor: 'rgba(0, 0, 0, .8)' } }}
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </>
  );
}
