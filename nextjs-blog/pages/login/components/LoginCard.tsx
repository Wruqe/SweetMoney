import React from "react";
import Image from "next/image";
import sweetmoney from "../../../public/feesweetmonet.png";
export default function LoginCard() {
  return (
    <>
      <div className="bg-customGreen w-[500px] h-[500px] rounded-2xl">
        <div className="h-full flex flex-col justify-center items-center ">
          <div className=" h-full flex justify-center items-center">
            <Image className="size-8" src={sweetmoney} alt="feesweetmonet" />
            <h1 className="p-2  text-white font-bold text-2xl">SweetMoney</h1>
          </div>
          <h1 className="text-2xl font-poppins pb-5 text-white">
            Welome Back, Sign in!
          </h1>
          <div className="p-2 flex flex-col text-white">
            <label className="font-poppins font text-xs mb-2	">Username</label>
            <input
              type="text"
              className=" p-1 w-[300px] h-[35px] bg-transparent border border-green-300 rounded text-white"
            />
          </div>
          <div className="p-2 flex flex-col text-white">
            <label className="font-poppins text-xs	mb-2">Password</label>
            <input
              type="text"
              className=" p-1 font-poppins w-[300px] h-[35px] bg-transparent border border-green-300 rounded text-white"
            />

            <button className="p-1 h-[30px] m-9 bg-gradient-to-r from-green-500 via-green-300 to-green-200 rounded font-bold text-xs animate-bounceIn">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
