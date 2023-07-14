import React, { useRef } from "react";
import Search from "./Search";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {

  const inputRef = useRef<HTMLInputElement>(null)
  const selectRef = useRef<HTMLSelectElement>(null)
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(`Search:`, { keyword: inputRef.current?.value, category: selectRef.current?.value })
  }

  return <>
    <div className="flex px-[7%] h-[86px] items-center justify-between bg-white">
      <div className="flex md:hidden items-center">
        <Image src={"/menu.svg"} alt="" width={20} height={20} priority />
      </div>
      <div className="left">
        <Link href="/" className="flex items-center left-0 top-4 p-2 rounded-lg hover:border-[#0067FF] hover:cursor-pointer hover:no-underline">
          <Image className="" width="40" height="40" src="/favicon.png" alt="" />
          <h3 className="text-xl font-bold text-sky-300">ABCD</h3>
        </Link>
      </div>

      <form onSubmit={handleSearch} className="hidden md:flex items-center middle ml-[46px] h-[40px] rounded-lg pl-4 border-primary_sky border-solid border-2">
        <input ref={inputRef} type="text" className="placeholder:text-gray-300 w-[420px]" placeholder="Tìm kiếm" />
        <div className="flex justify-center px-2 w-[120px] h-[40px] border-primary_sky border-solid border-2">
          <select ref={selectRef} name="" id="" className="w-full outline-none">
            <option value={0}>Tất cả</option>
            <option value={"laptop"}>Laptop</option>
            <option value={"mobile"}>Mobile</option>
          </select>
        </div>
        <button type="submit" className="bg-gradient-primary text-white h-[40px] w-[100px] rounded-r-lg">Tìm kiếm</button>
      </form>

      <div className="ml-[70px] right flex items-center space-x-[16px]">
        <div className="flex items-center flex-col">
          <Image className="w-[20px] h-auto" src={"/user.svg"} width={0} height={0} alt="" priority />
          <label className="hidden md:flex mt-[7px] text-[12px] leading-[15px] text-[#8B96A5]">Username</label>
        </div>
        <div className="hidden lg:flex items-center flex-col">
          <Image className="w-[20px] h-auto" src={"/cskh.svg"} width={0} height={0} alt="" priority />
          <label className="hidden md:flex mt-[7px] text-[12px] leading-[15px] text-[#8B96A5]">CSKH</label>
        </div>
        <div className="hidden lg:flex items-center flex-col">
          <Image className="w-[20px] h-auto" src={"/like.svg"} width={0} height={0} alt="" priority />
          <label className="hidden md:flex mt-[7px] text-[12px] leading-[15px] text-[#8B96A5]">Yêu thích</label>
        </div>
        <div className="flex items-center flex-col">
          <Image className="w-[20px] h-auto" src={"/cart.svg"} width={0} height={0} alt="" priority />
          <label className="hidden md:flex mt-[7px] text-[12px] leading-[15px] text-[#8B96A5]">Giỏ hàng</label>
        </div>
      </div>
    </div>
    <div className="flex md:hidden px-[8%] h-[56px] w-full items-center space-x-10 border-primary">
      <form onSubmit={handleSearch} className="relative w-full h-[40px] bg-gray-100 rounded-lg border-solid border-[0.3px] border-gray-300">
        <input type="text" className="w-full h-[40px] pl-8 bg-gray-100 rounded-lg" placeholder="Tìm kiếm" />
        <Image src={"/search.svg"} width={22} height={22} className="absolute top-2 left-2" alt=""/>
      </form>
    </div>
    <div className="hidden md:flex px-[8%] h-[56px] w-full items-center space-x-10 border-primary">
      <div className="flex items-center space-x-2">
        <Image className="w-[20px] h-auto" src={"/menu.svg"} alt="" width={0} height={0} priority />
        <p className="text-[16px] leading-[22px]">Tất cả</p>
      </div>
      <div className="flex items-center space-x-2">
        <p className="text-[16px] leading-[22px]">Free ship</p>
      </div>
      <div className="flex items-center space-x-2">
        <p className="text-[16px] leading-[22px]">Big sale</p>
      </div>
      <div className="flex items-center space-x-2">
        <p className="text-[16px] leading-[22px]">Hàng hiệu</p>
      </div>
      <div className="flex items-center space-x-2">
        <p className="text-[16px] leading-[22px]">Tuyển dụng</p>
      </div>
    </div>
  </>
}
