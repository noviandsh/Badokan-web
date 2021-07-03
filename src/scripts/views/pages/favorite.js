import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import '../components/restaurant-list';

const Search = {
  async render() {
    const favoriteRestourantElement = document.createElement('restaurant-list');
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    favoriteRestourantElement.data = restaurant;
    return favoriteRestourantElement;
  },

  async afterRender() {
    const pageHeader = document.querySelector('restaurant-list>h2');
    pageHeader.innerHTML = 'Restoran Favorit';

    document.title = 'Favorite | Badokan';
  },
};

export default Search;
