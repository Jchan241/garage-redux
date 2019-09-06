import { FETCH_CARS } from '../actions';


export default function (state = [], action) {
  switch (action.type) {
    case 'FETCH_CARS':
      return action.payload;
    case 'FETCH_CAR':
      return [action.payload];
    case 'DESTROY_CAR':
      return state.filter((car) => car !== action.payload);
    default:
      return state;
  }
}
