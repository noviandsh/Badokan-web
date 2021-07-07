Feature('Add customer review');

const assert = require('assert');

Scenario('add review to one restaurant', async ({ I }) => {
  I.amOnPage('/');

  const restaurantItem = locate('restaurant-item .title>a').at(5);

  I.click(restaurantItem);

  const reviewerName = `e2e ${Math.ceil(Math.random()*10000)}`;
  const reviewText = `Good Restaurant ${Math.ceil(Math.random()*10000)}`;

  I.fillField('#name-field', reviewerName);
  I.fillField('#review-field', reviewText);
  I.click('#submit-review');

  I.seeElement('.swal2-icon.swal2-success.swal2-icon-show');
  I.see('Terima kasih', '#swal2-title');
  I.click('.swal2-confirm');
  
  I.see(reviewerName);
  I.see(reviewText);
});
