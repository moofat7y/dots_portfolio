import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getStatus } from "../store/features/user/userSlice";
import { getAllPopImages } from "../store/features/images/popSlice";
import { getAllLogoImages } from "../store/features/images/logoSlice";
import { getAllSocialImages } from "../store/features/images/socialSlice";
import { getAllClientImages } from "../store/features/images/clientSlice";
import { getAllBrandImages } from "../store/features/images/brandSlice";
const MainLayout = () => {
  const { token, isFirstLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(getStatus());
    }
  }, [isFirstLogin]);

  useEffect(() => {
    if (token) {
      dispatch(getAllPopImages({ query: "" }));
      dispatch(getAllLogoImages({ query: "" }));
      dispatch(getAllSocialImages({ query: "" }));
      dispatch(getAllClientImages({ query: "" }));
      dispatch(getAllBrandImages({ query: "" }));
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
