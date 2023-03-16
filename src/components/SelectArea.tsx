import { BabyInterface } from "@/utils/types";
import en from "locales/en";
import he from "locales/he";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import NameHolder from "./NameHolder";
import NotFoundMessage from "./NotFoundMessage";

interface AreaProps {
  filterednames: BabyInterface[];

  SearchName: string;
}

function SelectArea({ filterednames, SearchName }: AreaProps) {
  const [Showmore, setShowmore] = useState(false);
  const [cursor, setcursor] = useState(50);
  const { locale } = useRouter();
  const t = locale === "en" ? en : he;

  useEffect(() => {
    const myDiv = document.getElementById("select-area");

    const handleScroll = () => {
      if (myDiv) {
        const { scrollHeight, clientHeight, scrollTop } = myDiv;
        if (scrollHeight - clientHeight <= scrollTop + 4) {
          setShowmore(true);
        } else {
          setShowmore(false);
        }
      }
    };

    if (myDiv) {
      myDiv.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (myDiv) {
        myDiv.removeEventListener("scroll", handleScroll);
      }
    };
  });
  return (
    <>
      <div
        id="select-area"
        className={`flex    overflow-visible ${
          filterednames.length == 0 ? "h-[210px]" : "max-h-[210px]"
        }  flex-wrap overflow-y-auto`}
      >
        {filterednames
          ?.slice(0, cursor)
          .map((baby: BabyInterface, i: number) => (
            <NameHolder key={i} baby={baby} />
          ))}

        {filterednames.length == 0 && <NotFoundMessage />}
      </div>
      <div
        className={`py-4 flex ${Showmore ? "" : "invisible"} ${
          locale == "he" ? "flex-row-reverse" : ""
        } `}
      >
        <button
          onClick={() => {
            cursor < filterednames.length
              ? setcursor(cursor + 50)
              : setcursor(cursor - 50);
          }}
          className={` capitalize  ${
            locale == "he" ? "text-rtl" : ""
          } underline text-[#1C1067] text-xl`}
        >
          {cursor < filterednames.length ? t.more : t.less}
        </button>
      </div>
    </>
  );
}

export default SelectArea;
