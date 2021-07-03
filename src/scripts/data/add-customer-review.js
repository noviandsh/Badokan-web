/* eslint-disable no-alert */
import API_ENDPOINT from '../globals/api-endpoint';
import App from '../views/app';

const addCustomerReview = {
  async fetchReview(reviews) {
    await fetch(API_ENDPOINT.ADD_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': '12345',
      },
      body: JSON.stringify(reviews),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        const app = new App(document.getElementById('main-content'));
        app.renderPage();
        console.log(responseJson.message);
        alert('Berhasil menambahkan ulasan');
      })
      .catch((error) => {
        console.log(error);
      });
  },

};

export default addCustomerReview;
