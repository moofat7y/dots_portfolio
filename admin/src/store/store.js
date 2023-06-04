import { configureStore } from "@reduxjs/toolkit";
import authRed from "./features/auth/authSlice";
import userRed from "./features/user/userSlice";
import populerRed from "./features/images/popSlice";
import logoRed from "./features/images/logoSlice";
import socialRed from "./features/images/socialSlice";
import clientRed from "./features/images/clientSlice";
import brandRed from "./features/images/brandSlice";
const store = configureStore({
  reducer: {
    auth: authRed,
    user: userRed,
    populer: populerRed,
    logo: logoRed,
    social: socialRed,
    client: clientRed,
    brand: brandRed,
  },
});

export default store;
