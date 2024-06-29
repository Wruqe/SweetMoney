import React from "react";

export default function LoginCard() {
  return (
    <>
      <div className="bg-customGreen w-[500px] h-[500px] rounded-lg">
        <div className="h-full flex flex-col justify-center items-center ">
          <h1 className="text-2xl font-poppins pb-5 text-white">
            Welome Back, Sign in!
          </h1>
          <div className="p-2 flex flex-col text-white">
            <label className="font-poppins font text-xs mb-2	">Username</label>
            <input
              type="text"
              className=" w-[300px] h-[35px] bg-transparent border border-green-300 rounded text-white"
            />
          </div>
          <div className="p-2 flex flex-col text-white">
            <label className="font-poppins text-xs	mb-2">Password</label>
            <input
              type="text"
              className="font-poppins w-[300px] h-[35px] bg-transparent border border-green-300 rounded text-white"
            />

            <button className=" h-[30px] m-9 bg-green-300 rounded font-bold text-xs animate-bounceIn ">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
