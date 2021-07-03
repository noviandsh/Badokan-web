import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantData {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async restaurantSearch(query) {
    const response = await fetch(API_ENDPOINT.SEARCH(query));
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async restaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static imageLarge(imageId) {
    const response = API_ENDPOINT.PICTURE_LARGE(imageId);
    return response;
  }

  static imageMedium(imageId) {
    const response = API_ENDPOINT.PICTURE_MEDIUM(imageId);
    return response;
  }

  static imageSmall(imageId) {
    const response = API_ENDPOINT.PICTURE_SMALL(imageId);
    return response;
  }
}

export default RestaurantData;
