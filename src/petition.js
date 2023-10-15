import axios from 'axios';
import Notiflix, { Notify } from 'notiflix';
const urlBase = 'https://pixabay.com/api/';
const key = '38213608-ad9783a4d46f018b5b60b3fea';
let total = 0;

async function searchImages(page, per_page, searchWord) {
  try {
    const response = await axios.get(urlBase, {
      timeout: 10000,
      params: {
        key: key,
        q: searchWord,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: per_page,
        page: page,
      },
    });
    const totalHits = response.data.totalHits;

    total = totalHits;
    if (total > 0) {
      Notify.success(`Hooray! We found ${total} images.`);
      return response;
    } else {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
  } catch (error) {
    console.log(error);
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
}

export { searchImages, total };
