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

export const getAllLogoImages = createAsyncThunk(
  "images/get-logo",
  async ({ query }, thunkAPI) => {
    try {
      const response = await imagesService.getAllLogoImages(query);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const uploadLogoImages = createAsyncThunk(
  "images/upload-logo",
  async ({ data }, thunkAPI) => {
    try {
      const formData = new FormData();
      data.map((img) => {
        formData.append("images", img.file);
      });
      const response = await imagesService.uploadLogoImages(formData);
      return response;
    } catch (error) {
      notifyError(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteLogoImage = createAsyncThunk(
  "images/delete-logo",
  async ({ public_id }, thunkAPI) => {
    try {
      const response = await imagesService.deleteLogoImage(public_id);
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
      })
      .addCase(uploadLogoImages.fulfilled, (state, action) => {
        state.images = [...action.payload, ...state.images];
        state.count = action.payload + action.payload.length;
      })
      .addCase(deleteLogoImage.fulfilled, (state, action) => {
        state.images = state.images.filter(
          (image) => image.public_id !== action.meta.arg.public_id
        );
        state.count = state.count - 1;
      });
  },
});

export default logoSlice.reducer;
