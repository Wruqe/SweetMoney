import React from "react";
import Image from "next/image";
import LoginCard from "./components/LoginCard";
import sweetmoney from "../../public/feesweetmonet.png";
import BG from "../../public/BG.png";

export default function () {
  return (
    <div className="relative h-screen w-screen bg-white">
      <div className="absolute top-0 left-0 h-full w-1/2 bg-white rounded-r-3xl overflow-hidden">
        <div className=" h-full flex justify-center items-center">
          <LoginCard />
        </div>
      </div>
      <div className="absolute top-0 right-0 h-full w-1/2 rounded-l-3xl overflow-hidden bg-customGreen">
        <div className=" h-full flex justify-center items-center p-5">
          <Image className="size-12" src={sweetmoney} alt="feesweetmonet" />
          <h1 className="p-3 text-white font-bold text-4xl">SweetMoney</h1>
        </div>
      </div>
    </div>
  );
}
