import React from "react";
import Search from "./Search";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "Hàng nóng", path: "/" },
  { name: "Quà tặng", path: "/" },
  { name: "Giảm giá", path: "/" },
  { name: "Free ship", path: "/" },
];

function Navbar() {
  return (
    <div className="flex w-full justify-between border border-gray-300 border-solid border-1px py-4 px-[6.8%]">
      <div className="flex items-center text-[#1C1C1C]">
        <Image width="18" height="12" className="mr-2" src="/menu.svg" alt="" />
        Tất cả
      </div>
      <div>
        <ul className="flex items-start">
          {navItems.map((item, index) => (
            <Link className="text-[#1C1C1C]" key={index} href={item.path}>
              <li className="px-4 ">{item.name}</li>
            </Link>
          ))}
          <li className="flex px-4">
            <Link className="text-[#1C1C1C] mr-2" href="/">
              Thêm
            </Link>
            <Image width="12" height="8" src="/dropdown.svg" alt={""} />
          </li>
        </ul>
      </div>
      <div className="flex text-[#1C1C1C] w-[15%]">
        <button className="flex items-center w-1/3">
          <p className="px-4">VND</p>
          <Image width="12" height="8" src="/dropdown.svg" alt={""} />
        </button>
        <button className="flex items-center w-2/3">
          <p className="px-4">Tỉnh Thành</p>
          <Image width="12" height="8" src="/dropdown.svg" alt={""} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
