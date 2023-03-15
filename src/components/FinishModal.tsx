import en from "locales/en";
import he from "locales/he";
import { useRouter } from "next/router";
import React from "react";
import CloseIcon from "./Icons/CloseIcon";
import FinsihIcon from "./Icons/FinsihIcon";
interface Props {
  closeModal: () => void;
}

function FinishModal({ closeModal }: Props) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : he;
  return (
    <div className="fixed grid grid-cols-1 z-50 place-items-center   items-center h-full inset-0 ">
      <div className="relative flex flex-col items-center z-20 space-y-4 py-6 px-2 sm:px-12 bg-white rounded-xl">
        <span className="text-4xl mt-9">{t.awesome}</span>
        <span className="text-center text-xl font-light max-w-[250px]">
          {t.finishMessage}
        </span>
        <div className="animate-wiggle">
          <FinsihIcon />
        </div>
        <div
          className="absolute -top-3 right-2 p-3 cursor-pointer"
          onClick={closeModal}
        >
          <CloseIcon />
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
