import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import brandService from "./brandService";
const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  images: [],
  count: 0,
};

export const getAllBrandImages = createAsyncThunk(
  "images/get-brand",
  async ({ query }, thunkAPI) => {
    try {
      const response = await brandService.getAllBrandImages(query);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBrandImages.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getAllBrandImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.images = [...state.images, ...action.payload.images];
        state.count = action.payload.count;
      })
      .addCase(getAllBrandImages.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});

export default brandSlice.reducer;
