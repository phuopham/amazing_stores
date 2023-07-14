import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-white">
      <div className="h-[256px] flex w-full flex px-[6.8%] mb-10 bg-white">
        <div className="w-1/3 mt-10 mr-12">
          <Link
            href="/"
            className="flex mb-3 items-center rounded-lg hover:border-[#0067FF] hover:cursor-pointer hover:no-underline"
          >
            <Image
              className=""
              width="60"
              height="50"
              src="/favicon.png"
              alt=""
            />
            <h3 className="text-xl font-bold text-sky-300">ABCD</h3>
          </Link>
          <p className="text-xl mb-4 text-[#8B96A5]">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            Lorem ipsum is placeholder text commonly used in the graphic, print
          </p>
          <div className="flex">
            <img
              className="w-[30px] h-[30px] mr-4"
              src="/facebook.svg"
              alt=""
            />
            <img className="w-[30px] h-[30px] mr-4" src="/twitter.svg" alt="" />
            <img
              className="w-[30px] h-[30px] mr-4"
              src="/linkedln.svg"
              alt=""
            />
            <img
              className="w-[30px] h-[30px] mr-4"
              src="/instagram.svg"
              alt=""
            />
            <img className="w-[30px] h-[30px] mr-4" src="/youtube.svg" alt="" />
          </div>
        </div>
        <div className="w-1/6 flex flex-col mt-10">
          <h5 className="font-medium text-xl mb-2">
            Giới thiệu
          </h5>
          <Link className="text-[#8B96A5]" href="/">Lorem ipsum</Link>
          <Link className="text-[#8B96A5]" href="/">Lorem ipsum</Link>
          <Link className="text-[#8B96A5]" href="/">Lorem ipsum</Link>
          <Link className="text-[#8B96A5]" href="/">Lorem ipsum</Link>
          <Link className="text-[#8B96A5]" href="/">Lorem ipsum</Link>
        </div>
        <div className="w-1/6 flex flex-col mt-10">
          <h5 className="font-medium text-xl mb-2">Đối tác</h5>
          <Link className="text-[#8B96A5]" href="/">Lorem ipsum</Link>
          <Link className="text-[#8B96A5]" href="/">Lorem ipsum</Link>
          <Link className="text-[#8B96A5]" href="/">Lorem ipsum</Link>
          <Link className="text-[#8B96A5]" href="/">Lorem ipsum</Link>
          <Link className="text-[#8B96A5]" href="/">Lorem ipsum</Link>
        </div>
        <div className="w-1/6 flex flex-col mt-10">
          <h5 className="font-medium text-xl mb-2">
            Thông tin
          </h5>
          <Link className="text-[#8B96A5]" href="/">Lorem ipsum</Link>
          <Link className="text-[#8B96A5]" href="/">Lorem ipsum</Link>
          <Link className="text-[#8B96A5]" href="/">Lorem ipsum</Link>
          <Link className="text-[#8B96A5]" href="/">Lorem ipsum</Link>
          <Link className="text-[#8B96A5]" href="/">Lorem ipsum</Link>
        </div>
        <div className="w-1/6 flex flex-col mt-10">
          <h5 className="font-medium text-xl mb-2">
            Người dùng
          </h5>
          <Link className="text-[#8B96A5]" href="/">Lorem ipsum</Link>
          <Link className="text-[#8B96A5]" href="/">Lorem ipsum</Link>
          <Link className="text-[#8B96A5]" href="/">Lorem ipsum</Link>
          <Link className="text-[#8B96A5]" href="/">Lorem ipsum</Link>
        </div>
      </div>
      <div className="box-container h-[68px] flex items-center px-10 py-3 bg-[#EFF2F4] border-secondary">
        <p>&copy; 2023 Royal Software.</p>
      </div>
    </div>
  );
}

export default Footer;
