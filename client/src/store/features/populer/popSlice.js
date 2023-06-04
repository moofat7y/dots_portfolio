import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import popService from "./popService/";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  images: [],
  count: 0,
};

export const getAllPopImages = createAsyncThunk(
  "images/get-populer",
  async ({ query }, thunkAPI) => {
    try {
      const response = await popService.getAllPopImages(query);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const populerSlice = createSlice({
  name: "populer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPopImages.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getAllPopImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.images = [...state.images, ...action.payload.images];
        state.count = action.payload.count;
      })
      .addCase(getAllPopImages.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});

export default populerSlice.reducer;
