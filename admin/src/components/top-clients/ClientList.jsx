import React from "react";
import { useSelector } from "react-redux";
import Uploader from "../Uploader";
import { uploadClientImages } from "../../store/features/images/clientSlice";
import ClientItem from "./ClientItem";
const ClientList = () => {
  const { images } = useSelector((state) => state.client);

  const images_list = images?.map((image) => {
    return <ClientItem key={image._id} image={image} />;
  });
  return (
    <div>
      <Uploader uploadUrl={uploadClientImages} />
      <div className="images-list row">{images_list}</div>
    </div>
  );
};

export default ClientList;
