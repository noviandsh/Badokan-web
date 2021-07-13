Feature('Liking and Unliking Restaurant');

const assert = require('assert');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.see('Restoran Favorit', 'restaurant-list>h2');
  I.see('Belum ada restoran yang anda sukai.', '#alert');
});

Scenario('liking and unliking one restaurant', async ({ I }) => {
  I.see('Restoran Favorit', 'restaurant-list>h2');
  I.see('Belum ada restoran yang anda sukai.', '#alert');

  I.amOnPage('/');

  I.seeElement('restaurant-item .title>a');

  const firstRestaurant = locate('restaurant-item .title>a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('restaurant-item .title>a');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click(locate('restaurant-item .title>a'));
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.dontSee(likedRestaurantName);
});
