const fileId = process.env.NEXT_PUBLIC_FILE_ID;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const url = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${apiKey}`;

export const fetchGoogleDriveData = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Ошибка HTTP! статус: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при получении файла:', error);
    throw error;
  }
};
