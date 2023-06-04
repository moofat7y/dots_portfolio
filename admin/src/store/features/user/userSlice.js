import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";
import { notifyError } from "../../../utils/helper";

const initialState = {
  user: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const getStatus = createAsyncThunk("/auth/status", async (thunkAPI) => {
  try {
    const res = await userService.getStatus();
    return res;
  } catch (error) {
    notifyError(error?.response?.data?.message);
    return thunkAPI.rejectWithValue(error?.response?.data?.message);
  }
});

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset(state) {
      state.user = null;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStatus.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(getStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
    //   .addCase(logout.pending, (state) => {
    //     state.isError = false;
    //     state.isSuccess = false;
    //     state.message = "";
    //   })
    //   .addCase(logout.fulfilled, (state, action) => {
    //     state.isError = false;
    //     state.isSuccess = true;
    //     state.message = "Logout Success";
    //     state.token = null;
    //   })
    //   .addCase(logout.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.isError = true;
    //     state.isSuccess = false;
    //     state.message = action.payload;
    //     state.token = null;
    //   });
  },
});
export const { reset } = userSlice.actions;
export default userSlice.reducer;
