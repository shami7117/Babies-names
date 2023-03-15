import React, { useState } from "react";
import Lottie from "lottie-react-web";
import animationData from "../../public/twitter-heart-girl.json";
interface IProps {
  showanimation: boolean;
}
function HeartAnimatedGirl() {
  return (
    <>
      <div className="absolute -left-1 -top-[10px]">
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

export default HeartAnimatedGirl;
