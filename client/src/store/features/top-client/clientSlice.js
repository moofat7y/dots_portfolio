import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import clientService from "./clientService";
const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  images: [],
  count: 0,
};

export const getAllClientImages = createAsyncThunk(
  "images/get-client",
  async ({ query }, thunkAPI) => {
    try {
      const response = await clientService.getAllClientImages(query);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllClientImages.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getAllClientImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.images = [...state.images, ...action.payload.images];
        state.count = action.payload.count;
      })
      .addCase(getAllClientImages.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});

export default clientSlice.reducer;
