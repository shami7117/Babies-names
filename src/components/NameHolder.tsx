import React, { useContext, useReducer, useState } from "react";
import { BabyInterface } from "@/utils/types";
import HeartIcon from "./Icons/HeartIcon";
import HeartAnimated from "./HeartAnimated";
import HeartAnimatedGirl from "./HeartAnimatedGirl";
import { NamesContext } from "@/pages/_app";
import { useEffect } from "react";

const NameHolder: React.FC<{
  baby: BabyInterface;
}> = ({ baby }) => {
  const [show, setShow] = useState(false);
  const { SelectedNames, dispatch, NamesDispatch } = useContext(NamesContext);

  const showHeart = () => {
    if (SelectedNames.length == 20) return;

    setShow(true);

    let start = performance.now();

    const frame = (time: number) => {
      const elapsed = time - start;

      if (elapsed < 1000) {
        requestAnimationFrame(frame);
      } else {
        setShow(false);
        NamesDispatch!({ type: "REMOVE", payload: baby });
        dispatch!({ type: "ADD", payload: baby });
      }
    };

    requestAnimationFrame(frame);
  };

  // SelectedNames:string | any=getNames();

  return (
    <div
      className=" relative    rounded-full cursor-pointer  m-2 group "
      onClick={showHeart}
    >
      {baby.gender === "female" ? (
        <div className=" flex relative max-w-[100px] overflow-hidden  items-center px-2 py-1 rounded-full  border-2 border-[#885AC3]">
          <HeartIcon gender={baby.gender} />
          {show && <HeartAnimated />}
          <span className="text-[#885AC3] px-2">{baby.name}</span>
        </div>
      ) : (
        <div className="flex max-w-[100px] items-center px-2 py-1 rounded-full border-2 border-[#81CBE0]">
          <HeartIcon gender={baby.gender} />
          {show && <HeartAnimatedGirl />}
          <span className="text-[#81CBE0] px-2">{baby.name}</span>
        </div>
      )}
    </div>
  );
};

export default NameHolder;
