import React from "react";
import Lottie from "lottie-react";
import animation from "../anim/anim.json";

const Page404 = () => {
  return (
    <div
      style={{ height: "100vh" }}
      className="w-100 d-flex align-items-center justify-content-center"
    >
      <Lottie className="w-100 h-100" animationData={animation} />
    </div>
  );
};

export default Page404;
