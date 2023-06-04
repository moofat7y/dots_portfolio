import React from "react";
import { useSelector } from "react-redux";
import Uploader from "../Uploader";
import SocialItem from "./SocialItem";
import { uploadSocialImages } from "../../store/features/images/socialSlice";
const SocialList = () => {
  const { images } = useSelector((state) => state.social);

  const images_list = images?.map((image) => {
    return <SocialItem key={image._id} image={image} />;
  });
  return (
    <div>
      <Uploader uploadUrl={uploadSocialImages} />
      <div className="images-list row">{images_list}</div>
    </div>
  );
};

export default SocialList;
