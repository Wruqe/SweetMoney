import React from "react";
import Image from "next/image";
import sweetmoney from "../../public/feesweetmonet.png";

export default function logo() {
  return (
    <div className=" h-full flex justify-center items-center">
      <Image className="size-8" src={sweetmoney} alt="feesweetmonet" />
      <h1 className="p-2  text-white font-bold text-2xl">SweetMoney</h1>
    </div>
  );
}
