Feature('Searching Restaurant');

const assert = require('assert');

Scenario('searching restaurant', async ({ I }) => {
  I.amOnPage('/');

  const restaurantNameElement = 'restaurant-item .title>a';
  const restaurantsName = [];

  I.seeElement(restaurantNameElement);

  for (let i = 1; i <= 5; i++) {
    restaurantsName.push(await I.grabTextFrom(locate(restaurantNameElement).at(i)));
  }

  const searchQuery = restaurantsName[1].substring(1, 6);
  const matchingRestaurant = restaurantsName.filter((name) => name.indexOf(searchQuery) !== -1);

  I.fillField('#search-input', searchQuery);
  I.pressKey('Enter');
  I.wait(1);

  const visibleRestaurant = await I.grabNumberOfVisibleElements('restaurant-item');
  assert.strictEqual(matchingRestaurant.length, visibleRestaurant);

  matchingRestaurant.forEach(async (name, index) => {
    const visibleName = await I.grabTextFrom(locate(restaurantNameElement).at(index + 1));
    assert.strictEqual(name, visibleName);
  })
});