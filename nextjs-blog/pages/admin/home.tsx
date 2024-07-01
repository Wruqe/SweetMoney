import React from "react";
import Drawer from "./components/Drawer";
import Drawer2 from "./components/Drawer2";
import Cards from "./components/Cards";
import BiggerCard from "./components/BiggerCard";
export default function home() {
  return (
    <div className="h-full h-screen bg-customGreen">
      <div className="flex flex-row pb-6">
        <Drawer />
      </div>
      <div className="flex flex-row">
        <div className="h-[730px]  flex flex-col w-[300px]">
          <Drawer2 />
        </div>

        <div className=" ml-10 m flex flex-col w-full gap-9">
          <div className="flex flex-row gap-24">
            <Cards />
            <Cards />
            <Cards />
          </div>
          <div className="flex flex-row gap-24">
            <BiggerCard />
            <BiggerCard />
          </div>
        </div>
      </div>
    </div>
  );
}
