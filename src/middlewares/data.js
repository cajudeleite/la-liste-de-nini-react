import axios from "axios";

import { GET_DATA, setData } from "../actions";

export const dataMiddleware = (store) => (next) => (action) => {

  switch (action.type) {
    case GET_DATA:
      axios.get('http://localhost:3001/data').then(
        (response) => {
          console.log(response.data);
          const data = response.data;
          store.dispatch(setData(data));
        },
      ).catch(
        (error) => {
          console.log(error);
        },
      );
      next(action);
      break;
    default:
      next(action);
  }
};
