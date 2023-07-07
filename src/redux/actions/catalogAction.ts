import { Product } from "../../constants/Interface";

export const SAMPLE_ACTION = 'SAMPLE_ACTION';
export const GET_CATALOG = 'GET_CATALOG';
export const GET_CART = 'GET_CART';


export const catalogAction = () => (dispatch: any, catalogList: Product[] = []) => {
  dispatch({ type: GET_CATALOG, payload: catalogList });
};
