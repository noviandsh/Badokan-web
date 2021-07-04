const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="material-icons" aria-hidden="true">favorite_border</i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="material-icons" aria-hidden="true">favorite</i>
  </button>
`;

export { createLikeButtonTemplate, createLikedButtonTemplate };
