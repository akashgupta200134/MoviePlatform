import axios from "axios";
import { getproducts } from "../Reducers/ProductReducers";

export const asyncgetproducts = () => async (dispatch, getstate) => {
    
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch(getproducts(response.data));
  } catch (error) {
    console.log(error);
  }
};
