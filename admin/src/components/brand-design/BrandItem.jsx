import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { RxTrash } from "react-icons/rx";
import { CiEdit } from "react-icons/ci";
import { useDispatch } from "react-redux";
import {
  deleteBrandImage,
  updateBrandCategory,
} from "../../store/features/images/brandSlice";
import CustomModel from "../CustomModel";
import { useForm } from "react-hook-form";

const BrandItem = ({ image }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [open, setOpen] = useState(false);
  const handleDelete = async () => {
    setIsLoading(true);
    await dispatch(deleteBrandImage({ public_id: image.public_id }));
    setIsLoading(false);
  };

  const onSubmit = async (data) => {
    setUpdating(true);
    await dispatch(updateBrandCategory({ imgId: image._id, data }));
    setUpdating(false);
    setOpen(false);
  };
  return (
    <div className="col-6 col-md-4 col-lg-3 p-0">
      <div className="thumbnail p-2">
        <div
          className={`thumbnail-inner d-flex justify-content-center position-relative rounded-3 ${
            isLoading ? "loading" : ""
          }`}
        >
          <LazyLoadImage
            effect="blur"
            className="rounded-3 w-100 h-100"
            src={image.secure_url}
            alt=""
          />
          <div className="d-flex gap-2 position-absolute  top-50 start-50 translate-middle">
            <div
              onClick={() => handleDelete()}
              role="button"
              style={{ width: "30px", height: "30px" }}
              className="delete shadow  bg-secondary d-flex align-items-center justify-content-center rounded-circle"
            >
              <RxTrash className="fs-5 text-danger" />
            </div>

            <div
              style={{ width: "30px", height: "30px" }}
              role="button"
              className="edit shadow  bg-secondary d-flex align-items-center justify-content-center rounded-circle"
            >
              <CiEdit
                className="fs-5 text-primary"
                onClick={() => setOpen(true)}
              />
            </div>
          </div>
        </div>
      </div>

      {open ? (
        <CustomModel>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Change category
                </h1>
                <button
                  onClick={() => setOpen(false)}
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="modal-body">
                  <input
                    {...register("category", {
                      required: "Category is required",
                      minLength: {
                        value: 3,
                        message: "Please enter a valid category",
                      },
                      value: image.category,
                    })}
                    type="text"
                    className={`form-control ${
                      errors.category ? "is-invalid" : ""
                    }`}
                    placeholder="category"
                  />
                  {errors.category ? (
                    <p className="invalid-feedback">
                      {errors.category.message}
                    </p>
                  ) : null}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </button>
                  <button
                    disabled={updating}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </CustomModel>
      ) : null}
    </div>
  );
};

export default BrandItem;
