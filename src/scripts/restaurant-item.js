class RestaurantItem extends HTMLElement {
  set data(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.setAttribute('data-city', this._restaurant.city);
    this.innerHTML = `
            <img class="thumbnail" src="${this._restaurant.pictureId}" alt="Restoran ${this._restaurant.name} yang berada di kota ${this._restaurant.city}">
            <div class="content">
                <p class="rating">Rating restoran ${this._restaurant.rating}
                </p>
                <h1 class="title"><a href="#">${this._restaurant.name}</a></h1>
                <p class="description">${this._restaurant.description}</p>
            </div>
        `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
