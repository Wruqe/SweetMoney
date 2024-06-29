import React from "react";
import Image from "next/image";
import LoginCard from "./components/LoginCard";
import sweetmoney from "../../public/feesweetmonet.png";
export default function () {
  return (
    <div className="relative h-screen w-screen bg-white">
      <div className="absolute top-0 left-0 h-full w-1/2 bg-white rounded-r-3xl overflow-hidden">
        <div className=" h-full flex justify-center items-center">
          <LoginCard />
        </div>
      </div>
      <div className="absolute top-0 right-0 h-full w-1/2 bg-customGreen rounded-l-3xl overflow-hidden">
        <div className=" h-full flex justify-center items-center p-5">
          <Image src={sweetmoney} alt="feesweetmonet" />
          <h1 className="p-5  text-white font-bold text-4xl">SweetMoney</h1>
        </div>
      </div>
    </div>
  );
}
