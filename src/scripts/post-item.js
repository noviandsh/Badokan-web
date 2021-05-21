class PostItem extends HTMLElement {
  set post(restaurant) {
    this.restaurant = restaurant;
    this.render();
  }

  render() {
    this.setAttribute('data-city', this.restaurant.city);
    this.innerHTML = `
            <img class="post-item__thumbnail" src="${this.restaurant.pictureId}" alt="Gambar restoran ${this.restaurant.name} yang berada di kota ${this.restaurant.city}">
            <div class="post-item__content">
                <p class="post-item__date">Rating restoran ${this.restaurant.rating}
                </p>
                <h1 class="post-item__title"><a href="#">${this.restaurant.name}</a></h1>
                <p class="post-item__description">${this.restaurant.description}</p>
            </div>
        `;
  }
}

customElements.define('post-item', PostItem);
