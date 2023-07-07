import { GET_CATALOG, GET_CART } from '../actions/catalogAction';

const initialState = {
  catalogList: [],
  cartList: []
};

const catalogReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_CATALOG:
      return {
        ...state,
        catalogList: action.payload
        // Modify state as needed
      };
      case GET_CART:
        return {
          ...state,
          cartList: action.payload
          // Modify state as needed
        };
    default:
      return state;
  }
};

export default catalogReducer;
