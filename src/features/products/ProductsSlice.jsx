import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteProduct, fetchProucts, postProduct } from "./ProductsApi";

const initialState = {
  products: [],
  isLoading: false,
  postSuccess: false,
  deleteSuccess: false,
  isError: false,
  error: "",
};

export const getProducts = createAsyncThunk("products/getProducts", async () => {
  //   const res = await fetch("http://localhost:5000/products");
  //   const data = await res.json();
  //   return data;
  const products = fetchProucts();
  return products;
});

export const addProduct = createAsyncThunk("products/addProduct", async (data) => {
  const product = postProduct(data);
  return product;
});

export const removeProduct = createAsyncThunk("products/removeProduct", async (id, thunkAPI) => {
  const product = await deleteProduct(id);
  thunkAPI.dispatch(removeFromList(id));
  return product;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    togglePostSuccess: (state) => {
      state.postSuccess = false;
    },
    toggleDeleteSuccess: (state) => {
      state.deleteSuccess = false;
    },
    removeFromList: (state, action) => {
      state.products = state.products.filter((product) => product._id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        (state.isLoading = true), (state.isError = false);
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        (state.isLoading = false), (state.products = action.payload);
      })
      .addCase(getProducts.rejected, (state, action) => {
        (state.isLoading = false), (state.products = []), (state.isError = true), (state.error = action.error.message);
      })
      .addCase(addProduct.pending, (state) => {
        (state.isLoading = true), (state.postSuccess = false), (state.isError = false);
      })
      .addCase(addProduct.fulfilled, (state) => {
        (state.isLoading = false), (state.postSuccess = true);
      })
      .addCase(addProduct.rejected, (state, action) => {
        (state.isLoading = false),
          (state.postSuccess = false),
          (state.isError = true),
          (state.error = action.error.message);
      })

      .addCase(removeProduct.pending, (state) => {
        (state.isLoading = true), (state.deleteSuccess = false), (state.isError = false);
      })
      .addCase(removeProduct.fulfilled, (state) => {
        (state.isLoading = false), (state.deleteSuccess = true);
      })
      .addCase(removeProduct.rejected, (state, action) => {
        (state.isLoading = false),
          (state.deleteSuccess = false),
          (state.isError = true),
          (state.error = action.error.message);
      });
  },
});

// Action creators are generated for each case reducer functions
export const { togglePostSuccess, toggleDeleteSuccess, removeFromList } = productsSlice.actions;

export default productsSlice.reducer;
