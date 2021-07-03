import Home from '../views/pages/home';
import Search from '../views/pages/search';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Home,
  '/search': Search,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
