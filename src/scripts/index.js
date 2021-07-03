import 'regenerator-runtime'; /* for async await transpile */
import '@fortawesome/fontawesome-free/js/all';
import '../styles/main.css';
import main from './main';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App(document.getElementById('main-content'));
const drawer = document.querySelector('nav');
const hamburger = document.getElementById('hamburger');

window.addEventListener('load', () => {
  swRegister();
  app.renderPage();
  main();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
  drawer.classList.remove('open');
  hamburger.classList.remove('open');
  // scroll to the top of the document
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

document.getElementById('year').innerHTML = `Copyright &copy; ${new Date().getFullYear()} - Badokan`;
