import 'regenerator-runtime'; /* for async await transpile */
// eslint-disable-next-line import/extensions
import '@fortawesome/fontawesome-free/js/all.js';
import '../styles/main.css';
import './restaurant-list';
import main from './main';

main();
document.getElementById('year').innerHTML = `Copyright &copy; ${new Date().getFullYear()} - Badokan`;
