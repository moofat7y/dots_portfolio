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

export const getAllPopImages = createAsyncThunk(
  "images/get-populer",
  async ({ query }, thunkAPI) => {
    try {
      const response = await imagesService.getAllPopImages(query);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const uploadPopImages = createAsyncThunk(
  "images/upload-populer",
  async ({ data }, thunkAPI) => {
    try {
      const formData = new FormData();
      data.map((img) => {
        formData.append("images", img.file);
      });
      const response = await imagesService.uploadPopImages(formData);
      return response;
    } catch (error) {
      notifyError(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deletePopImage = createAsyncThunk(
  "images/delete-populer",
  async ({ public_id }, thunkAPI) => {
    try {
      const response = await imagesService.deletePopImage(public_id);
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
      })
      .addCase(uploadPopImages.fulfilled, (state, action) => {
        state.images = [...action.payload, ...state.images];
        state.count = action.payload + action.payload.length;
      })
      .addCase(deletePopImage.fulfilled, (state, action) => {
        state.images = state.images.filter(
          (image) => image.public_id !== action.meta.arg.public_id
        );
        state.count = state.count - 1;
      });
  },
});

export default populerSlice.reducer;
