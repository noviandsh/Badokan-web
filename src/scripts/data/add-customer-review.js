import Swal from 'sweetalert2';
import API_ENDPOINT from '../globals/api-endpoint';

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
        if (responseJson.error) {
          return {
            icon: 'error',
            title: 'Gagal menambahkan ulasan',
            text: 'pastikan kolom nama dan ulasan telah terisi!',
          };
        } else {
          return {
            icon: 'success',
            title: 'Terima kasih',
            text: 'Ulasan berhasil dikirim',
          };
        }
      })
      .then((alert) => {
        Swal.fire(alert)
          .then(() => {
            if (alert.icon === 'success') {
              window.location.reload();
            }
          });
      })
      .catch((error) => {
        if (!window.navigator.onLine) {
          Swal.fire(
            'Gagal menambahkan ulasan',
            'pastikan koneksi internet anda tersambung!',
            'error',
          );
        } else {
          Swal.fire(
            'Error',
            error,
            'error',
          );
        }
      });
  },

};

export default addCustomerReview;
