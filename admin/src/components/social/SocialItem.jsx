import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { RxTrash } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { deleteSocialImage } from "../../store/features/images/socialSlice";

const SocialItem = ({ image }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const handleDelete = async () => {
    setIsLoading(true);
    await dispatch(deleteSocialImage({ public_id: image.public_id }));
    setIsLoading(false);
  };
  return (
    <div className="col-6 col-md-4 col-lg-3 p-0">
      <div className="thumbnail p-2">
        <div
          className={`thumbnail-inner  position-relative rounded-3 ${
            isLoading ? "loading" : ""
          }`}
        >
          <LazyLoadImage
            effect="blur"
            className="rounded-3 ratio ratio-4x3"
            src={image.secure_url}
            alt=""
          />
          <div
            onClick={() => handleDelete()}
            role="button"
            style={{ width: "30px", height: "30px" }}
            className="delete position-absolute shadow top-50 start-50 translate-middle bg-secondary d-flex align-items-center justify-content-center rounded-circle"
          >
            <RxTrash className="fs-5 text-danger" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialItem;
