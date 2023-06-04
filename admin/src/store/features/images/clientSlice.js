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

export const getAllClientImages = createAsyncThunk(
  "images/get-client",
  async ({ query }, thunkAPI) => {
    try {
      const response = await imagesService.getAllClientImages(query);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const uploadClientImages = createAsyncThunk(
  "images/upload-client",
  async ({ data }, thunkAPI) => {
    try {
      const formData = new FormData();
      data.map((img) => {
        formData.append("images", img.file);
      });
      const response = await imagesService.uploadClientImages(formData);
      return response;
    } catch (error) {
      notifyError(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateClientLink = createAsyncThunk(
  "images/update-link",
  async ({ imgId, data }, thunkAPI) => {
    try {
      const response = await imagesService.updateClientLink(imgId, data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteClientImage = createAsyncThunk(
  "images/delete-client",
  async ({ public_id }, thunkAPI) => {
    try {
      const response = await imagesService.deleteClientImage(public_id);
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
      })
      .addCase(uploadClientImages.fulfilled, (state, action) => {
        state.images = [...action.payload, ...state.images];
        state.count = action.payload + action.payload.length;
      })
      .addCase(deleteClientImage.fulfilled, (state, action) => {
        state.images = state.images.filter(
          (image) => image.public_id !== action.meta.arg.public_id
        );
        state.count = state.count - 1;
      })
      .addCase(updateClientLink.fulfilled, (state, action) => {
        state.images = state.images.map((image) =>
          image.id === action.meta.arg.imgId ? action.payload : image
        );
      });
  },
});

export default clientSlice.reducer;
