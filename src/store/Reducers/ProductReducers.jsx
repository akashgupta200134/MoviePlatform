import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getproducts: (state, action) => {
      state.products = action.payload;
    },
  },
});



export const { getproducts } = productSlice.actions;

export default productSlice.reducer;
