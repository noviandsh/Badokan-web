import restaurantData from '../../data/restaurant-data';
import '../components/restaurant-list';

const Home = {
  async render() {
    const restaurantListElement = document.createElement('restaurant-list');
    restaurantListElement.data = await restaurantData.restaurantList();
    return restaurantListElement;
  },

  async afterRender() {
    document.title = 'Home | Badokan';
  },
};

export default Home;
