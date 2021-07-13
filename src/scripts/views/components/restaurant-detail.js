import restaurantData from '../../data/restaurant-data';

const dataList = (datas) => {
  let list = '';
  datas.forEach((data) => {
    list += `<li>${data.name}</li>`;
  });
  return list;
};

class RestaurantDetail extends HTMLElement {
  set data(data) {
    this._searchResult = data.restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
          <div id="detail-image">
            <picture>
              <source media="(max-width: 600px)" srcset="${restaurantData.imageSmall(this._searchResult.pictureId)}">
              <img alt="Restoran ${this._searchResult.name} yang berada di kota ${this._searchResult.city}" src="${restaurantData.imageLarge(this._searchResult.pictureId)}"/>
            </picture>
            <div id="image-attr">
              <div id="detail-rating"><i class="material-icons">star</i> ${this._searchResult.rating}</div>
              <div id="detail-favorite"></div>
            </div>
            <div id="restaurant-categories">
              <ul>${dataList(this._searchResult.categories)}</ul>
            </div>
            <div id="restaurant-location">
              <i class="material-icons">location_on</i> <a href="https://www.google.com/maps/search/${this._searchResult.address.replace(/\s/g, '+')}+${this._searchResult.city.replace(/\s/g, '+')}" target="_blank" rel="noreferrer"> ${this._searchResult.address}, ${this._searchResult.city}</a>
            </div>
          </div>
          <h2>${this._searchResult.name}</h2>
          <p>${this._searchResult.description}</p>
          <div id="menu-container">
            <h2>Menu</h2>
            <div id="menu-list">
              <div id="food-menu">
                <h3>
                  <i class="material-icons">restaurant</i> <span> Makanan </span> <i class="material-icons">restaurant</i>
                </h3>
                <ul>${dataList(this._searchResult.menus.foods)}</ul>
              </div>
              <div id="food-menu">
                <h3>
                  <i class="material-icons">local_cafe</i> <span> Minuman </span> <i class="material-icons">local_cafe</i>
                </h3>
                <ul>${dataList(this._searchResult.menus.drinks)}</ul>
              </div>
            </div>
          </div>
          <div id="review-container">
            <h2>Ulasan Pelanggan</h2>
            <div id="customer-review"></div>
            <div id="review-form">
              <h3>Beri ulasan</h3>
              <div>
                <label for="name-field">Nama</label>
                <input id="name-field" name="name-field" type="text" placeholder="masukkan nama anda"/>
                <label for="name-field">Ulasan</label>
                <textarea id="review-field" rows="4" placeholder="masukkan ulasan anda"></textarea>
                <button id="submit-review">Kirim</button>
              </div>
            </div>
          </div>
        `;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
