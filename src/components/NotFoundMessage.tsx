import en from "locales/en";
import he from "locales/he";
import { useRouter } from "next/router";
import React from "react";
import NotFoundIcon from "./Icons/notFoundIcon";
function NotFoundMessage() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : he;
  return (
    <div className="flex absolute z-50 inset-0  bg-white justify-center items-center flex-col space-y-9 w-full ">
      <span className="text-2xl text-blue-900 font-semibold">{t.notfound}</span>
      <span className="text-center font-light text-xl max-w-[400px]">
        {t.notfoundMessage}
      </span>
      <NotFoundIcon />
    </div>
  );
}

export default NotFoundMessage;
