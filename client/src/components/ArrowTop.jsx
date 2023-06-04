import React, { useEffect, useRef } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ArrowTop = () => {
  const scroll = useRef();
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (this.scrollY > 200) {
        scroll?.current?.classList?.add("active");
      } else {
        scroll?.current?.classList?.remove("active");
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);
  return (
    <div
      id="top-arrow"
      ref={scroll}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="top-arrow "
    >
      <IoIosArrowUp className="lh-1 fs-4" />
    </div>
  );
};

export default ArrowTop;
