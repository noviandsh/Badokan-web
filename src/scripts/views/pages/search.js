import restaurantData from '../../data/restaurant-data';
import UrlParser from '../../routes/url-parser';
import '../components/restaurant-list';

const Search = {
  async render() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const searchResultElement = document.createElement('restaurant-list');
    searchResultElement.data = await restaurantData.restaurantSearch(url.query);
    return searchResultElement;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.getElementById('restaurants');
    const contentTitle = document.querySelector('restaurant-list h2');
    contentTitle.innerHTML = 'Hasil Pencarian';

    if (restaurantContainer.innerHTML === '') {
      document.querySelector('restaurant-list').innerHTML += `<span id="alert">Maaf, restoran dengan nama "${url.query}" tidak ditemukan.</span>`;
    }

    document.title = `${url.query} - Search | Badokan`;
  },
};

export default Search;
