import React from "react";
import { useSelector } from "react-redux";
import Uploader from "../Uploader";
import { uploadBrandImages } from "../../store/features/images/brandSlice";
import BrandItem from "./BrandItem";
const BrandList = () => {
  const { images } = useSelector((state) => state.brand);

  const images_list = images?.map((image) => {
    return <BrandItem key={image._id} image={image} />;
  });
  return (
    <div>
      <Uploader uploadUrl={uploadBrandImages} />
      <div className="images-list row">{images_list}</div>
    </div>
  );
};

export default BrandList;
