import React from "react";
import { useSelector } from "react-redux";
import Uploader from "../Uploader";
import { uploadLogoImages } from "../../store/features/images/logoSlice";
import LogoItem from "./LogoItem";
const LogoList = () => {
  const { images } = useSelector((state) => state.logo);

  const images_list = images?.map((image) => {
    return <LogoItem key={image._id} image={image} />;
  });
  return (
    <div>
      <Uploader uploadUrl={uploadLogoImages} />
      <div className="images-list row">{images_list}</div>
    </div>
  );
};

export default LogoList;
