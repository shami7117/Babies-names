import en from "locales/en";
import he from "locales/he";
import Image from "next/image";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { useState } from "react";
import GlobeIcon from "./Icons/GlobeIcon";
import HoldModal from "./HoldModal";
import LogoIcon from "./Icons/LogoIcon";
import { NextApiRequest, NextApiResponse } from "next";
import { getIpAddress } from "./getIpAddress";
import { log } from "console";
import { NONAME } from "dns";
// import geoip from "geoip-lite";
import { json } from "stream/consumers";

function Navbar() {
  var routerCheck = useRouter();
  var id = routerCheck.query;
  console.log(id);

  const [details, setDetails] = useState(null);

  const router = useRouter();
  const { locale } = router;

  const [country, setCountry] = useState(false);

  const [show, setShow] = useState(false);

  const changeLanguage = (language: string) => {
    console.log(language);
    const subroutes = router.pathname.split("/");
    console.log(router.pathname);
    if (subroutes.includes(language)) return;
    else router.push(language);
  };
  // var global;

  // console.log(global);
  // fetchIP();

  async function fetchIP() {
    let url = "https://ipinfo.io/json?token=db7ad518816e84";

    let response = await fetch(url);
    let data = await response.json();
    console.log(data.country);
    var global = data.country;
    global == "IL" ? setCountry(true) : setCountry(false);
    return global;
  }

  let useGlobal = fetchIP();
  // console.log(useGlobal);
  // const t = locale === "en" ? en : he;
  const t = country ? he : en;

  return (
    <div className="flex justify-between bg-[#F9F8F5] items-center px-5 pt-5">
      {show && <HoldModal closeModal={() => setShow(false)} />}

      {/*  computer view  */}
      <Link href="/" className="hidden md:block">
        <LogoIcon />
      </Link>

      <div className="hidden md:flex items-center">
        {router.pathname.includes("finish") ? (
          <button
            className={`px-8 py-2   shadow-xl w-full  mx-6 sm:w-auto  bg-[#1C1067] uppercase text-white rounded-full text-xl  ${
              locale == "en" ? "" : "text-rtl"
            } `}
            onClick={() => setShow(true)}
          >
            {t.createButton}
          </button>
        ) : (
          <></>
        )}
        <GlobeIcon />

        <select
          className="outline-none mx-2 cursor-pointer"
          onChange={(e) => changeLanguage(e.target.value)}
          value={locale}
        >
          <option className="text-lg ml-2" value="en">
            En
          </option>
          <option className="text-lg ml-2" value="he">
            He
          </option>
        </select>

        {/* Antd Select */}

        {/* end of Antd Select */}
      </div>
      <div className="md:hidden">
        <select
          className="outline-none mx-2 cursor-pointer"
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option className="text-lg ml-2" value="en">
            En
          </option>
          <option className="text-lg ml-2" value="he">
            He {details && <h3>{`${details}`}</h3>}
          </option>
        </select>
      </div>
      <Link className="md:hidden" href="/">
        <svg
          width="128"
          height="27"
          viewBox="0 0 128 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.326 13.502C8.034 13.634 8.634 13.994 9.126 14.582C9.618 15.17 9.864 15.854 9.864 16.634C9.864 17.27 9.702 17.846 9.378 18.362C9.066 18.866 8.604 19.268 7.992 19.568C7.38 19.856 6.648 20 5.796 20H1.44V7.418H5.67C6.942 7.418 7.908 7.712 8.568 8.3C9.24 8.888 9.576 9.65 9.576 10.586C9.576 11.366 9.366 12.002 8.946 12.494C8.526 12.974 7.986 13.31 7.326 13.502ZM2.7 12.98H5.634C6.486 12.98 7.14 12.782 7.596 12.386C8.064 11.978 8.298 11.42 8.298 10.712C8.298 10.016 8.064 9.47 7.596 9.074C7.14 8.678 6.468 8.48 5.58 8.48H2.7V12.98ZM5.706 18.938C6.618 18.938 7.326 18.722 7.83 18.29C8.346 17.858 8.604 17.264 8.604 16.508C8.604 15.752 8.334 15.152 7.794 14.708C7.266 14.252 6.552 14.024 5.652 14.024H2.7V18.938H5.706ZM11.6042 15.068C11.6042 14.06 11.8022 13.178 12.1982 12.422C12.6062 11.654 13.1642 11.066 13.8722 10.658C14.5922 10.238 15.4022 10.028 16.3022 10.028C17.2382 10.028 18.0422 10.244 18.7142 10.676C19.3982 11.108 19.8902 11.66 20.1902 12.332V10.172H21.4502V20H20.1902V17.822C19.8782 18.494 19.3802 19.052 18.6962 19.496C18.0242 19.928 17.2202 20.144 16.2842 20.144C15.3962 20.144 14.5922 19.934 13.8722 19.514C13.1642 19.094 12.6062 18.5 12.1982 17.732C11.8022 16.964 11.6042 16.076 11.6042 15.068ZM20.1902 15.086C20.1902 14.294 20.0282 13.598 19.7042 12.998C19.3802 12.398 18.9362 11.936 18.3722 11.612C17.8202 11.288 17.2082 11.126 16.5362 11.126C15.8402 11.126 15.2162 11.282 14.6642 11.594C14.1122 11.906 13.6742 12.362 13.3502 12.962C13.0382 13.55 12.8822 14.252 12.8822 15.068C12.8822 15.872 13.0382 16.58 13.3502 17.192C13.6742 17.792 14.1122 18.254 14.6642 18.578C15.2162 18.89 15.8402 19.046 16.5362 19.046C17.2082 19.046 17.8202 18.884 18.3722 18.56C18.9362 18.236 19.3802 17.774 19.7042 17.174C20.0282 16.574 20.1902 15.878 20.1902 15.086ZM25.5687 12.35C25.8927 11.666 26.3907 11.108 27.0627 10.676C27.7467 10.244 28.5507 10.028 29.4747 10.028C30.3747 10.028 31.1787 10.238 31.8867 10.658C32.5947 11.066 33.1467 11.654 33.5427 12.422C33.9507 13.178 34.1547 14.06 34.1547 15.068C34.1547 16.076 33.9507 16.964 33.5427 17.732C33.1467 18.5 32.5887 19.094 31.8687 19.514C31.1607 19.934 30.3627 20.144 29.4747 20.144C28.5387 20.144 27.7287 19.934 27.0447 19.514C26.3727 19.082 25.8807 18.524 25.5687 17.84V20H24.3267V6.68H25.5687V12.35ZM32.8767 15.068C32.8767 14.252 32.7147 13.55 32.3907 12.962C32.0787 12.362 31.6467 11.906 31.0947 11.594C30.5427 11.282 29.9187 11.126 29.2227 11.126C28.5507 11.126 27.9327 11.288 27.3687 11.612C26.8167 11.936 26.3787 12.398 26.0547 12.998C25.7307 13.598 25.5687 14.294 25.5687 15.086C25.5687 15.878 25.7307 16.574 26.0547 17.174C26.3787 17.774 26.8167 18.236 27.3687 18.56C27.9327 18.884 28.5507 19.046 29.2227 19.046C29.9187 19.046 30.5427 18.89 31.0947 18.578C31.6467 18.254 32.0787 17.792 32.3907 17.192C32.7147 16.58 32.8767 15.872 32.8767 15.068ZM37.1032 8.318C36.8512 8.318 36.6352 8.228 36.4552 8.048C36.2752 7.868 36.1852 7.646 36.1852 7.382C36.1852 7.118 36.2752 6.902 36.4552 6.734C36.6352 6.554 36.8512 6.464 37.1032 6.464C37.3552 6.464 37.5712 6.554 37.7512 6.734C37.9312 6.902 38.0212 7.118 38.0212 7.382C38.0212 7.646 37.9312 7.868 37.7512 8.048C37.5712 8.228 37.3552 8.318 37.1032 8.318ZM37.7332 10.172V20H36.4732V10.172H37.7332ZM49.4785 14.582C49.4785 15.014 49.4665 15.344 49.4425 15.572H41.2885C41.3245 16.316 41.5045 16.952 41.8285 17.48C42.1525 18.008 42.5785 18.41 43.1065 18.686C43.6345 18.95 44.2105 19.082 44.8345 19.082C45.6505 19.082 46.3345 18.884 46.8865 18.488C47.4505 18.092 47.8225 17.558 48.0025 16.886H49.3345C49.0945 17.846 48.5785 18.632 47.7865 19.244C47.0065 19.844 46.0225 20.144 44.8345 20.144C43.9105 20.144 43.0825 19.94 42.3505 19.532C41.6185 19.112 41.0425 18.524 40.6225 17.768C40.2145 17 40.0105 16.106 40.0105 15.086C40.0105 14.066 40.2145 13.172 40.6225 12.404C41.0305 11.636 41.6005 11.048 42.3325 10.64C43.0645 10.232 43.8985 10.028 44.8345 10.028C45.7705 10.028 46.5865 10.232 47.2825 10.64C47.9905 11.048 48.5305 11.6 48.9025 12.296C49.2865 12.98 49.4785 13.742 49.4785 14.582ZM48.2005 14.546C48.2125 13.814 48.0625 13.19 47.7505 12.674C47.4505 12.158 47.0365 11.768 46.5085 11.504C45.9805 11.24 45.4045 11.108 44.7805 11.108C43.8445 11.108 43.0465 11.408 42.3865 12.008C41.7265 12.608 41.3605 13.454 41.2885 14.546H48.2005ZM55.1678 20.144C54.0398 20.144 53.1158 19.886 52.3958 19.37C51.6878 18.842 51.2918 18.128 51.2078 17.228H52.5038C52.5638 17.78 52.8218 18.23 53.2778 18.578C53.7458 18.914 54.3698 19.082 55.1498 19.082C55.8338 19.082 56.3678 18.92 56.7518 18.596C57.1478 18.272 57.3458 17.87 57.3458 17.39C57.3458 17.054 57.2378 16.778 57.0218 16.562C56.8058 16.346 56.5298 16.178 56.1938 16.058C55.8698 15.926 55.4258 15.788 54.8618 15.644C54.1298 15.452 53.5358 15.26 53.0798 15.068C52.6238 14.876 52.2338 14.594 51.9098 14.222C51.5978 13.838 51.4418 13.328 51.4418 12.692C51.4418 12.212 51.5858 11.768 51.8738 11.36C52.1618 10.952 52.5698 10.628 53.0978 10.388C53.6258 10.148 54.2258 10.028 54.8978 10.028C55.9538 10.028 56.8058 10.298 57.4538 10.838C58.1018 11.366 58.4498 12.098 58.4978 13.034H57.2378C57.2018 12.458 56.9738 11.996 56.5538 11.648C56.1458 11.288 55.5818 11.108 54.8618 11.108C54.2258 11.108 53.7098 11.258 53.3138 11.558C52.9178 11.858 52.7197 12.23 52.7197 12.674C52.7197 13.058 52.8338 13.376 53.0618 13.628C53.3018 13.868 53.5958 14.06 53.9438 14.204C54.2918 14.336 54.7598 14.486 55.3478 14.654C56.0558 14.846 56.6198 15.032 57.0398 15.212C57.4598 15.392 57.8198 15.656 58.1198 16.004C58.4198 16.352 58.5758 16.814 58.5878 17.39C58.5878 17.918 58.4438 18.392 58.1558 18.812C57.8678 19.22 57.4658 19.544 56.9498 19.784C56.4338 20.024 55.8398 20.144 55.1678 20.144ZM75.385 20H74.125L67.159 9.416V20H65.899V7.418H67.159L74.125 17.984V7.418H75.385V20ZM77.6628 15.068C77.6628 14.06 77.8608 13.178 78.2568 12.422C78.6648 11.654 79.2228 11.066 79.9308 10.658C80.6508 10.238 81.4608 10.028 82.3608 10.028C83.2968 10.028 84.1008 10.244 84.7728 10.676C85.4568 11.108 85.9488 11.66 86.2488 12.332V10.172H87.5088V20H86.2488V17.822C85.9368 18.494 85.4388 19.052 84.7548 19.496C84.0828 19.928 83.2788 20.144 82.3428 20.144C81.4548 20.144 80.6508 19.934 79.9308 19.514C79.2228 19.094 78.6648 18.5 78.2568 17.732C77.8608 16.964 77.6628 16.076 77.6628 15.068ZM86.2488 15.086C86.2488 14.294 86.0868 13.598 85.7628 12.998C85.4388 12.398 84.9948 11.936 84.4308 11.612C83.8788 11.288 83.2668 11.126 82.5948 11.126C81.8988 11.126 81.2748 11.282 80.7228 11.594C80.1708 11.906 79.7328 12.362 79.4088 12.962C79.0968 13.55 78.9408 14.252 78.9408 15.068C78.9408 15.872 79.0968 16.58 79.4088 17.192C79.7328 17.792 80.1708 18.254 80.7228 18.578C81.2748 18.89 81.8988 19.046 82.5948 19.046C83.2668 19.046 83.8788 18.884 84.4308 18.56C84.9948 18.236 85.4388 17.774 85.7628 17.174C86.0868 16.574 86.2488 15.878 86.2488 15.086ZM102.085 9.992C103.237 9.992 104.173 10.358 104.893 11.09C105.625 11.81 105.991 12.86 105.991 14.24V20H104.749V14.384C104.749 13.316 104.491 12.5 103.975 11.936C103.459 11.372 102.757 11.09 101.869 11.09C100.945 11.09 100.207 11.396 99.6553 12.008C99.1033 12.62 98.8273 13.508 98.8273 14.672V20H97.5853V14.384C97.5853 13.316 97.3273 12.5 96.8113 11.936C96.2953 11.372 95.5873 11.09 94.6873 11.09C93.7633 11.09 93.0253 11.396 92.4733 12.008C91.9213 12.62 91.6453 13.508 91.6453 14.672V20H90.3853V10.172H91.6453V11.864C91.9573 11.252 92.4013 10.79 92.9773 10.478C93.5533 10.154 94.1953 9.992 94.9033 9.992C95.7553 9.992 96.4993 10.196 97.1353 10.604C97.7833 11.012 98.2513 11.612 98.5393 12.404C98.8033 11.624 99.2533 11.03 99.8893 10.622C100.537 10.202 101.269 9.992 102.085 9.992ZM117.682 14.582C117.682 15.014 117.67 15.344 117.646 15.572H109.492C109.528 16.316 109.708 16.952 110.032 17.48C110.356 18.008 110.782 18.41 111.31 18.686C111.838 18.95 112.414 19.082 113.038 19.082C113.854 19.082 114.538 18.884 115.09 18.488C115.654 18.092 116.026 17.558 116.206 16.886H117.538C117.298 17.846 116.782 18.632 115.99 19.244C115.21 19.844 114.226 20.144 113.038 20.144C112.114 20.144 111.286 19.94 110.554 19.532C109.822 19.112 109.246 18.524 108.826 17.768C108.418 17 108.214 16.106 108.214 15.086C108.214 14.066 108.418 13.172 108.826 12.404C109.234 11.636 109.804 11.048 110.536 10.64C111.268 10.232 112.102 10.028 113.038 10.028C113.974 10.028 114.79 10.232 115.486 10.64C116.194 11.048 116.734 11.6 117.106 12.296C117.49 12.98 117.682 13.742 117.682 14.582ZM116.404 14.546C116.416 13.814 116.266 13.19 115.954 12.674C115.654 12.158 115.24 11.768 114.712 11.504C114.184 11.24 113.608 11.108 112.984 11.108C112.048 11.108 111.25 11.408 110.59 12.008C109.93 12.608 109.564 13.454 109.492 14.546H116.404ZM123.371 20.144C122.243 20.144 121.319 19.886 120.599 19.37C119.891 18.842 119.495 18.128 119.411 17.228H120.707C120.767 17.78 121.025 18.23 121.481 18.578C121.949 18.914 122.573 19.082 123.353 19.082C124.037 19.082 124.571 18.92 124.955 18.596C125.351 18.272 125.549 17.87 125.549 17.39C125.549 17.054 125.441 16.778 125.225 16.562C125.009 16.346 124.733 16.178 124.397 16.058C124.073 15.926 123.629 15.788 123.065 15.644C122.333 15.452 121.739 15.26 121.283 15.068C120.827 14.876 120.437 14.594 120.113 14.222C119.801 13.838 119.645 13.328 119.645 12.692C119.645 12.212 119.789 11.768 120.077 11.36C120.365 10.952 120.773 10.628 121.301 10.388C121.829 10.148 122.429 10.028 123.101 10.028C124.157 10.028 125.009 10.298 125.657 10.838C126.305 11.366 126.653 12.098 126.701 13.034H125.441C125.405 12.458 125.177 11.996 124.757 11.648C124.349 11.288 123.785 11.108 123.065 11.108C122.429 11.108 121.913 11.258 121.517 11.558C121.121 11.858 120.923 12.23 120.923 12.674C120.923 13.058 121.037 13.376 121.265 13.628C121.505 13.868 121.799 14.06 122.147 14.204C122.495 14.336 122.963 14.486 123.551 14.654C124.259 14.846 124.823 15.032 125.243 15.212C125.663 15.392 126.023 15.656 126.323 16.004C126.623 16.352 126.779 16.814 126.791 17.39C126.791 17.918 126.647 18.392 126.359 18.812C126.071 19.22 125.669 19.544 125.153 19.784C124.637 20.024 124.043 20.144 123.371 20.144Z"
            fill="#333333"
          />
        </svg>
      </Link>
      <Link className="md:hidden" href="/">
        <Image src="/fox.png" alt="logo name" width="31" height="31" />
      </Link>
    </div>
  );
}

export default Navbar;