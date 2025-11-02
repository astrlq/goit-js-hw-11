import axios from 'axios';
const API_KEY = '53054234-db08f1651f6ed2d5abc76426b';
const BASE_URL = 'https://pixabay.com/api/';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export function getImagesByQuery(query) {
  return axiosInstance
    .get('', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 40,
      },
    })
    .then(response => response.data);
}
