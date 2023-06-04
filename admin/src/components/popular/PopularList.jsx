import React from "react";
import { useSelector } from "react-redux";
import PopItem from "./PopItem";
import Uploader from "../Uploader";
import { uploadPopImages } from "../../store/features/images/popSlice";

const PopularList = () => {
  const { images } = useSelector((state) => state.populer);

  const images_list = images?.map((image) => {
    return <PopItem key={image._id} image={image} />;
  });
  return (
    <div>
      <Uploader uploadUrl={uploadPopImages} />
      <div className="images-list row">{images_list}</div>
    </div>
  );
};

export default PopularList;
