import { useDispatch } from "react-redux";
import { GET_CATALOG_API } from "../constants/Endpoints";
import { catalogAction, GET_CATALOG } from "../redux/actions/catalogAction";
import { get } from "../util/api";

export const getCatalog = async (dispatch: any) => {

    try {
      const response = await get<ResponseType>(GET_CATALOG_API);
      // Handle the response data as needed
      dispatch({type: GET_CATALOG, payload: response})
      return response
    } catch (error) {
      console.error('Error:', error);
      // Handle the error
      return []
    }
  };