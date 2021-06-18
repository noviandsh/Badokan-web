import './restaurant-item';

const queryString = require('query-string');

const searchQuery = queryString.parse(window.location.search).search;
const restaurantData = require('../DATA.json');

const removeDuplicate = (object) => {
  object.filter((v, i, a) => a.findIndex((t) => (t.id === v.id)) === i);
  return object;
};
class RestaurantList extends HTMLElement {
  connectedCallback() {
    this._restaurantData = restaurantData;
    this.render();
  }

  render() {
    let restaurants;
    this.innerHTML = `
            <h2>Rekomendasi Restoran</h2>
            <div id="restaurants"></div>
        `;
    if (searchQuery === undefined) {
      restaurants = this._restaurantData.restaurants;
    } else {
      const searchInCity = this._restaurantData.restaurants.filter(
        (restaurant) => restaurant.city.toUpperCase().includes(searchQuery.toUpperCase()),
      );

      const searchInName = this._restaurantData.restaurants.filter(
        (restaurant) => restaurant.name.toUpperCase().includes(searchQuery.toUpperCase()),
      );

      const searchResult = searchInCity.concat(searchInName);

      restaurants = removeDuplicate(searchResult);
    }

    if (restaurants.length > 0) {
      restaurants.forEach((item) => {
        const restaurantItemElement = document.createElement('restaurant-item');
        restaurantItemElement.data = item;
        this.querySelector('#restaurants').appendChild(restaurantItemElement);
      });
    } else {
      this.innerHTML += `
                <div id="search-alert">
                    <i class="fas fa-exclamation-triangle fa-5x"></i>
                    <p>Restoran dengan nama atau di kota '${searchQuery}' tidak ditemukan.</p>
                </div>
            `;
    }
  }
}

customElements.define('restaurant-list', RestaurantList);
