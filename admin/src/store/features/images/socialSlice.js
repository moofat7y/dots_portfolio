import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import imagesService from "./imagesService";
import { notifyError } from "../../../utils/helper";

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
      const response = await imagesService.getAllSocialImages(query);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const uploadSocialImages = createAsyncThunk(
  "images/upload-social",
  async ({ data }, thunkAPI) => {
    try {
      const formData = new FormData();
      data.map((img) => {
        formData.append("images", img.file);
      });
      const response = await imagesService.uploadSocialImages(formData);
      return response;
    } catch (error) {
      notifyError(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteSocialImage = createAsyncThunk(
  "images/delete-social",
  async ({ public_id }, thunkAPI) => {
    try {
      const response = await imagesService.deleteSocialImage(public_id);
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
      })
      .addCase(uploadSocialImages.fulfilled, (state, action) => {
        state.images = [...action.payload, ...state.images];
        state.count = action.payload + action.payload.length;
      })
      .addCase(deleteSocialImage.fulfilled, (state, action) => {
        state.images = state.images.filter(
          (image) => image.public_id !== action.meta.arg.public_id
        );
        state.count = state.count - 1;
      });
  },
});

export default socialSlice.reducer;
