import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Sale = {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

export type Product = {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  retailer: string;
  brand: string;
  reviews: [];
  details: string[];
  tags: string[];
  sales: Sale[];
};

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setData } = productSlice.actions;
export default productSlice.reducer;
