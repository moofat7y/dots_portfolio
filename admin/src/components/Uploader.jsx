import React, { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { RxTrash } from "react-icons/rx";
import { notifyWarning } from "../utils/helper";
import { useDispatch } from "react-redux";
const Uploader = ({ uploadUrl }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const onFileSelect = (event) => {
    if (!event.target.files) {
      return;
    }
    if (selectedImages.length + event.target.files.length > 10) {
      notifyWarning("The maximum number if images is 10");
      return;
    }
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    const imagesArray = selectedFilesArray.map((file) => {
      return {
        secure_url: URL.createObjectURL(file),
        file: file,
      };
    });
    setSelectedImages((prev) => [...prev, ...imagesArray]);
  };

  const handleDelete = (imgId) => {
    setSelectedImages((prev) => prev.filter((img) => img.secure_url !== imgId));
  };

  useEffect(() => {
    const timeId = setTimeout(async () => {
      if (selectedImages.length > 0) {
        setIsLoading(true);
        await dispatch(uploadUrl({ data: selectedImages }));
        setIsLoading(false);
        setSelectedImages([]);
      }
    }, 2000);

    return () => clearTimeout(timeId);
  }, [selectedImages]);
  const images_list = selectedImages.map((image) => {
    return (
      <div key={image.secure_url} className="col-6 col-md-3 col-lg-2 p-0 mb-2">
        <div className="thumbnail h-100 px-2">
          <div
            className={`thumbnail-inner h-100 position-relative rounded-3 ${
              isLoading ? "loading" : ""
            }`}
          >
            <img
              effect="blur"
              className="rounded-3 w-100 h-100"
              src={image.secure_url}
              alt={image.secure_url}
            />
            <div
              onClick={() => handleDelete(image.secure_url)}
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
  });
  return (
    <div className="uploader row justify-content-center">
      {images_list}

      {selectedImages.length >= 10 || isLoading ? null : (
        <div className="uploader-btn rounded-3 col-6 col-md-3 col-lg-2 p-0">
          <label
            htmlFor="images"
            role="button"
            className="w-100 h-100 d-flex flex-column align-items-center justify-content-center"
          >
            <BsPlusLg className="mb-2" />
            <span className="fs-7 fw-light">Upload</span>
          </label>
          <input
            onChange={onFileSelect}
            multiple
            accept="image/png , image/jpeg , image/webg"
            id="images"
            name="images"
            type="file"
            className="d-none"
          />
        </div>
      )}
    </div>
  );
};

export default Uploader;
