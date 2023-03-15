import en from "locales/en";
import he from "locales/he";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Hero() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : he;
  return (
    <div className="relative  overflow-x-clip flex justify-center xl:justify-between  font-poppins pb-16  mt-24 px-4">
      {/* left section */}
      <div className="xl:mt-14 xl:ml-36 flex flex-col justify-center ">
        <span className="text-4xl md:text-7xl uppercase w-full text-center text-[#0D0441] tracking-[20px]">
          {t.welcome}
        </span>

        <div className="text-[#0D0441] flex justify-center xl:justify-start text-lg 2xl:text-xl w-full  text-center leading-[60px] tracking-wide mt-6">
          <h1 className="max-w-[400px] ">{t.welcomeText}</h1>
        </div>
        <div className="relative w-full h-full flex justify-center xl:hidden">
          <img
            src="/baleine.png"
            className="h-[250px] xl:h-[500px]  object-contain"
            alt="baleine"
          />
        </div>

        <div className=" text-[24px] bg-white opacity-50 leading-8 xl:mt-9">
          <p className="max-w-[700px] text-[21px] xl:text-normal text-center xl:text-left px-4 lg:px-0">
            {t.description}
          </p>
        </div>
        <div className="w-full flex justify-center xl:justify-start">
          <div className="bg-transparent border-[3px] rounded-full p-2 hover:border-[6px] hover:p-1  border-[#7E6FD9] w-3/4 sm:w-[359px] h-[90px]  mt-14">
            <button
              className="uppercase font-medium   flex justify-between tracking-wider items-center px-6 text-white bg-[#1C1067] w-full h-full rounded-full"
              onClick={() => router.push("/pick")}
            >
              <span className="text-sn md:text-2xl">{t.callbutton}</span>

              <svg
                width="55"
                height="27"
                viewBox="0 0 66 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="14.2122"
                  width="61.3333"
                  height="4.18182"
                  rx="2.09091"
                  fill="white"
                />
                <rect
                  width="23.2094"
                  height="4.09577"
                  rx="2.04789"
                  transform="matrix(0.721962 0.691932 0.721962 -0.691932 46 3.1062)"
                  fill="white"
                />
                <rect
                  width="23.2094"
                  height="4.09577"
                  rx="2.04789"
                  transform="matrix(0.721962 -0.691932 -0.721962 -0.691932 48.957 32.3912)"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="relative w-full h-full hidden xl:flex bg-black ">
        <img
          src="/baleine.png"
          className="absolute -right-16 -top-0 object-cover"
          alt="baleine"
        />
      </div>

      <img
        src="/lines-min.png"
        className="absolute  w-[100px] hidden md:flex  xl:w-[200px] left-[45%] top-[-15%] "
        alt="lines"
      />
      <img
        src="/fish.png"
        className="absolute  w-[100px]  xl:w-[130px] left-[2%] top-[-10%] sm:[5%]  lg:top-[55%]  "
        alt="lines"
      />
      <img
        src="/star-min.png"
        className="absolute  w-[100px] hidden md:flex  xl:w-[130px] left-[50%] bottom-[-5%] xl:bottom-[-25%]  "
        alt="lines"
      />
    </div>
  );
}

export default Hero;
