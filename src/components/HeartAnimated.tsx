import React, { useState } from "react";
import Lottie from "lottie-react-web";
import animationData from "../../public/twitter-heart-animation.json";
interface IProps {
  showanimation: boolean;
}
function HeartAnimated() {
  return (
    <>
      <div className="absolute some -left-2 -top-3">
        <Lottie
          options={{
            animationData,
            autoplay: false,
            loop: true,
          }}
          speed={1.5}
          width={50}
          height={52}
        />
      </div>
    </>
  );
}

export default HeartAnimated;
