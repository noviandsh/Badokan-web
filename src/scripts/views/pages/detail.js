import addCustomerReview from '../../data/add-customer-review';
import restaurantData from '../../data/restaurant-data';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import '../components/restaurant-detail';
import customerReview from '../templates/customer-review';

const Home = {
  async render() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantListElement = document.createElement('restaurant-detail');
    restaurantListElement.data = await restaurantData.restaurantDetail(url.id);
    return restaurantListElement;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await restaurantData.restaurantDetail(url.id);
    const customerReviewElement = document.querySelector('#customer-review');
    const submitReviewButton = document.querySelector('#submit-review');

    customerReviewElement.innerHTML = await customerReview(restaurant.customerReviews);

    submitReviewButton.addEventListener('click', async (event) => {
      event.preventDefault();
      const newReview = {
        id: url.id,
        name: document.getElementById('name-field').value,
        review: document.getElementById('review-field').value,
      };
      await addCustomerReview.fetchReview(newReview);
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#detail-favorite'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        city: restaurant.city,
      },
    });

    document.title = `${restaurant.name} | Badokan`;
  },
};

export default Home;
