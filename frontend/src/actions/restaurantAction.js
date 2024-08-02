import axios from 'axios';
import { ALL_RESTAURANTS_REQUEST, ALL_RESTAURANTS_SUCCESS } from '../constants/restaurantConstant';

export const getRestaurants = () => {
  return async (dispatch) => {
    console.log('Making the API call');
    try {
      dispatch({ type: ALL_RESTAURANTS_REQUEST });

      let link = '/api/v1/eats/stores';
      const { data } = await axios.get(link);
      console.log('Consoling in the API file', data);

      const { restaurants, count } = data;
      dispatch({
        type: ALL_RESTAURANTS_SUCCESS,
        payload: { restaurants, count },
      });
    } catch (error) {
      console.error(error);
     
    }
  };
};
