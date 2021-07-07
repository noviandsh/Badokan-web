const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="material-icons" aria-hidden="true">favorite_border</i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="material-icons" aria-hidden="true">favorite</i>
  </button>
`;

export { createLikeButtonTemplate, createLikedButtonTemplate };
