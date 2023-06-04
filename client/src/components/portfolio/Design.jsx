import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import { getAllLogoImages } from "../../store/features/logo/logoSlice";
import SectionMainHeader from "../SectionMainHeader";
const Design = () => {
  const { images, count, isLoading } = useSelector((state) => state.logo);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const pagesCount = Math.ceil(count / 9);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(getAllLogoImages({ query: `limit=9&page=${page}` }));
      setLoading(false);
    };
    if (page > 1) {
      fetchData();
    }
  }, [page]);

  const images_list = images?.map((image, index) => {
    return (
      <div key={image._id} className="col-md-6 col-lg-4 p-0">
        <div className="thumbnail p-2">
          <div className="thumbnail-inner rounded-3">
            <LazyLoadImage
              effect="blur"
              className=" rounded-3 w-100 h-100"
              src={image.secure_url}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  });
  return (
    <section id="logo-sec" className="all-design design pt-120 pb-5">
      <SectionMainHeader title="Logo" header="Design" />
      <div className="container">
        {count === 0 ? (
          <div
            style={{ width: "100%", height: "60vh" }}
            className="d-flex  align-items-center justify-content-center"
          >
            <p className="text-grad fs-5 fw-semibold">No Content Avalibe</p>
          </div>
        ) : (
          <div className="images row">{images_list}</div>
        )}
      </div>
      <div
        className={`d-flex justify-content-center mt-4 ${
          count === 0 ? "d-none" : "d-block"
        }`}
      >
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={pagesCount === page || loading}
          className={`btn btn-outline-secondary shadow-secondary fadeup py-form px-4`}
        >
          {loading ? (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          ) : (
            "Show More"
          )}
        </button>
      </div>
    </section>
  );
};

export default Design;
