import './restaurant-item';

class RestaurantList extends HTMLElement {
  set data(data) {
    this._restaurantData = data;
    this.render();
  }

  render() {
    this.innerHTML = `
            <h2>Rekomendasi Restoran</h2>
            <div id="restaurants"></div>
        `;

    this._restaurantData.forEach((item) => {
      const restaurantItemElement = document.createElement('restaurant-item');
      restaurantItemElement.data = item;
      this.querySelector('#restaurants').appendChild(restaurantItemElement);
    });
  }
}

customElements.define('restaurant-list', RestaurantList);
