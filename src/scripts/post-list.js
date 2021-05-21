import './post-item';

const queryString = require('query-string');

const searchQuery = queryString.parse(window.location.search).search;
const restaurantData = require('../DATA.json');

class PostList extends HTMLElement {
  connectedCallback() {
    this.restaurant = restaurantData;
    this.render();
  }

  render() {
    let restaurants;
    this.innerHTML = `
            <h2>Rekomendasi Restoran</h2>
            <div id="posts"></div>
        `;
    if (searchQuery === undefined) {
      restaurants = this.restaurant.restaurants;
    } else {
      const searchInCity = this.restaurant.restaurants.filter(
        (restaurant) => restaurant.city.toUpperCase().includes(searchQuery.toUpperCase()),
      );

      const searchInName = this.restaurant.restaurants.filter(
        (restaurant) => restaurant.name.toUpperCase().includes(searchQuery.toUpperCase()),
      );

      const searchResult = searchInCity.concat(searchInName);
      const duplicateRemoved = searchResult
        .filter((v, i, a) => a.findIndex((t) => (t.id === v.id)) === i);

      restaurants = duplicateRemoved;
    }

    if (restaurants.length > 0) {
      restaurants.forEach((post) => {
        const postItemElement = document.createElement('post-item');
        postItemElement.post = post;
        this.querySelector('#posts').appendChild(postItemElement);
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

customElements.define('post-list', PostList);
