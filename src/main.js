import './css/styles.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');
const input = document.querySelector('input[name="search-text"]');

form.addEventListener('submit', onSearch);

async function onSearch(event) {
  event.preventDefault();

  const query = input.value.trim();

  if (!query) {
    iziToast.warning({
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);

    if (data.hits.length === 0) {
      iziToast.info({
        message: 'No images found for your request.',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong! Try again later.',
      position: 'topRight',
    });
    console.error(error);
  } finally {
    hideLoader();
    form.reset();
  }
}
