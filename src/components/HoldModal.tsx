import en from "locales/en";
import he from "locales/he";
import { useRouter } from "next/router";
import React from "react";
import CloseIcon from "./Icons/CloseIcon";
import HoldIcon from "./Icons/HoldIcon";
interface Props {
  closeModal: () => void;
}

function FinishModal({ closeModal }: Props) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : he;
  return (
    <div
      className="fixed grid grid-cols-1 place-items-center z-50  items-center h-full inset-0 "
      onClick={() => router.push("/pick")}
    >
      <div className="relative flex flex-col items-center z-50 space-y-4 py-6 px-2 sm:px-12 bg-white rounded-xl">
        <span className="text-4xl mt-9">{t.wait}</span>
        <span className="text-center text-xl font-light max-w-[350px] mb-2">
          {t.waitMessage}
        </span>
        <HoldIcon />
        <div
          className="absolute -top-3 right-2 p-3 cursor-pointer"
          onClick={closeModal}
        >
          <CloseIcon />
        </div>
        <div className="flex mt-5 ">
          <button className="px-8 py-2  shadow-xl w-full  mx-2 sm:w-auto  bg-[#1C1067] uppercase text-white rounded-full text-xl">
            {t.createButton}
          </button>
          <button className="px-8 py-2   shadow-xl w-full  mx-2 sm:w-auto  bg-[#1C1067] uppercase text-white rounded-full text-xl">
            {t.shareButton}
          </button>
        </div>
      </div>
      <div
        className="absolute inset-0 z-0 bg-black opacity-50"
        onClick={closeModal}
      />
    </div>
  );
}

export default FinishModal;
