const BASE_URL = 'https://jsonplaceholder.typicode.com';
const PHOTOS_PER_PAGE = 30;

export const fetchPhotos = async () => {
  try {
    const response = await fetch(`${BASE_URL}/photos`);
    if (!response.ok) {
      throw new Error('Failed to fetch photos');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching photos:', error);
    return [];
  }
};
