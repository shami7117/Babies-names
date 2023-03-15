import React from "react";
import { BabyInterface } from "@/utils/types";
import HeartIconFilled from "./HeartIconFilled";
import HeartIcon from "./Icons/HeartIcon";

const NameHolderFinal: React.FC<{ baby: BabyInterface }> = ({ baby }) => {
  return (
    <div className="cursor-pointer m-2  ">
      {baby.gender === "female" ? (
        <div className="flex max-w-[100px] items-center px-2 py-1 bg-[#F5EDFF] rounded-full border-2 border-[#885AC3]">
          <HeartIcon gender={baby.gender} />
          <span className="text-[#885AC3] px-2">{baby.name}</span>
        </div>
      ) : (
        <div className="flex max-w-[100px]   items-center px-2 py-1 bg-[#EAF4F6]  rounded-full border-2  border-[#81CBE0]">
          <HeartIcon gender={baby.gender} />
          <span className=" px-2">{baby.name}</span>
        </div>
      )}
    </div>
  );
};

export default NameHolderFinal;
