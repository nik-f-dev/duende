import { fetchGoogleDriveData } from '@/utils/googleDriveApi';
import Gallery from '@/components/Gallery';

export default async function GalleryData() {
  let photos = [];

  try {
    const fetchedData = await fetchGoogleDriveData();
    photos = fetchedData.slides || [];
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
  }

  return <Gallery photos={photos} />;
}
