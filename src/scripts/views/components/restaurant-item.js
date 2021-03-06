import restaurantData from '../../data/restaurant-data';

class RestaurantItem extends HTMLElement {
  set data(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.setAttribute('data-city', this._restaurant.city);
    this.innerHTML = `
            <div class="restaurant-item-thumbnail">
              <img class="lazyload" data-src="${restaurantData.imageSmall(this._restaurant.pictureId)}" alt="Restoran ${this._restaurant.name} yang berada di kota ${this._restaurant.city}">
            </div>
            <div class="content">
                <p class="rating">Rating restoran ${this._restaurant.rating}
                </p>
                <h1 class="title"><a href="#/detail/${this._restaurant.id}">${this._restaurant.name}</a></h1>
                <p class="description">${this._restaurant.description}</p>
            </div>
        `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
