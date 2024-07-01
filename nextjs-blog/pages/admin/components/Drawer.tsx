import React from "react";
import Image from "next/image";
import eyeglass from "../../../public/eyeglass.png";
import logo from "../../components/logo";

export default function Drawer() {
  return (
    <div className="navbar bg-transparent">
      <div className="flex-1">
        <a href="#" className="text-lg font-bold ml-4">
          {logo()}
        </a>
      </div>
      <div className="flex gap-1 mr-auto">
        <div className="form-control relative">
          <input
            type="text"
            placeholder="search anything..."
            className="bg-transparent border border-green-300 rounded-lg text-white w-[400px] h-[35px] p-1 pl-10 font-poppins placeholder-white "
          />
          <div className="absolute top-1.5 left-2 items-center">
            <Image src={eyeglass} alt="search" width={18} height={18} />
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            {/* <div className="w-10 rounded-full">
              <img
                alt="User Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div> */}
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
