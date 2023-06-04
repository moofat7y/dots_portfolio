import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import logoService from "./LogoService";
const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  images: [],
  count: 0,
};

export const getAllLogoImages = createAsyncThunk(
  "images/get-logo",
  async ({ query }, thunkAPI) => {
    try {
      const response = await logoService.getAllLogoImages(query);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const logoSlice = createSlice({
  name: "logo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllLogoImages.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getAllLogoImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.images = [...state.images, ...action.payload.images];
        state.count = action.payload.count;
      })
      .addCase(getAllLogoImages.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});

export default logoSlice.reducer;
