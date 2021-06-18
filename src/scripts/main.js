const queryString = require('query-string');

const main = () => {
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  const hamburgerButton = document.getElementById('hamburger');
  const navBox = document.querySelector('nav');
  const searchQuery = queryString.parse(window.location.search).search;

  if (searchQuery !== undefined) {
    searchInput.value = searchQuery;
  }

  searchInput.addEventListener('focus', (event) => {
    searchInput.placeholder = 'Nama restoran atau nama kota';
    event.stopPropagation();
  });

  searchInput.addEventListener('blur', (event) => {
    searchInput.placeholder = 'Pencarian';
    event.stopPropagation();
  });

  searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      searchBtn.click();
    }
  });

  searchBtn.addEventListener('click', () => {
    if (searchInput.value !== '') {
      window.location = `${window.location.pathname}?search=${searchInput.value}`;
    }
  });

  hamburgerButton.addEventListener('click', (event) => {
    hamburgerButton.classList.toggle('open');
    navBox.classList.toggle('open');
    event.stopPropagation();
  });
};

export default main;
