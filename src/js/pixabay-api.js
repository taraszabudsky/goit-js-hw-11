import axios from 'axios';

const API_KEY = '56343212-41744bdbe6b5267ac6c037485'; 
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const { data } = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 40,
    },
  });

  return data;
}