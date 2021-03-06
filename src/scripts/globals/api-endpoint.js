import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  SEARCH: (query) => `${CONFIG.BASE_URL}search?q=${query}`,
  ADD_REVIEW: `${CONFIG.BASE_URL}review`,
  PICTURE_SMALL: (pictureId) => `${CONFIG.BASE_URL}images/small/${pictureId}`,
  PICTURE_MEDIUM: (pictureId) => `${CONFIG.BASE_URL}images/medium/${pictureId}`,
  PICTURE_LARGE: (pictureId) => `${CONFIG.BASE_URL}images/large/${pictureId}`,
};

export default API_ENDPOINT;
