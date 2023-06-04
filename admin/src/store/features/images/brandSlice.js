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

export const getAllBrandImages = createAsyncThunk(
  "images/get-brand",
  async ({ query }, thunkAPI) => {
    try {
      const response = await imagesService.getAllBrandImages(query);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const uploadBrandImages = createAsyncThunk(
  "images/upload-brand",
  async ({ data }, thunkAPI) => {
    try {
      const formData = new FormData();
      data.map((img) => {
        formData.append("images", img.file);
      });
      const response = await imagesService.uploadBrandImages(formData);
      return response;
    } catch (error) {
      notifyError(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateBrandCategory = createAsyncThunk(
  "images/update-link",
  async ({ imgId, data }, thunkAPI) => {
    try {
      const response = await imagesService.updateBrandCategory(imgId, data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteBrandImage = createAsyncThunk(
  "images/delete-brand",
  async ({ public_id }, thunkAPI) => {
    try {
      const response = await imagesService.deleteBrandImage(public_id);
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
      })
      .addCase(uploadBrandImages.fulfilled, (state, action) => {
        state.images = [...action.payload, ...state.images];
        state.count = action.payload + action.payload.length;
      })
      .addCase(deleteBrandImage.fulfilled, (state, action) => {
        state.images = state.images.filter(
          (image) => image.public_id !== action.meta.arg.public_id
        );
        state.count = state.count - 1;
      })
      .addCase(updateBrandCategory.fulfilled, (state, action) => {
        state.images = state.images.map((image) =>
          image.id === action.meta.arg.imgId ? action.payload : image
        );
      });
  },
});

export default brandSlice.reducer;
