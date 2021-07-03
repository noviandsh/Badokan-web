const customerReview = async (reviews) => {
  let reviewData = '';
  reviews.reverse().forEach((review) => {
    reviewData += `
      <div class="review-card">
        <h4>${review.name}</h4>
        <p>"${review.review}"</p>
        <div class="review-date">${review.date} <i class="far fa-clock"></i></div>
      </div>
    `;
  });
  return reviewData;
};

export default customerReview;
