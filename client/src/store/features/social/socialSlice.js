import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import socialService from "./socialService";
const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  images: [],
  count: 0,
};

export const getAllSocialImages = createAsyncThunk(
  "images/get-social",
  async ({ query }, thunkAPI) => {
    try {
      const response = await socialService.getAllSocialImages(query);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const socialSlice = createSlice({
  name: "social",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllSocialImages.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getAllSocialImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.images = [...state.images, ...action.payload.images];
        state.count = action.payload.count;
      })
      .addCase(getAllSocialImages.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});

export default socialSlice.reducer;
