import Image from "next/image";
import React from "react";

export default function Description({ data }: { data: any }) {
  return (
    <div className="w-full h-[580px] flex border-secondary p-4 gap-6 rounded-lg bg-white">
      <div className="w-2/3 flex gap-6">
        <div className="w-1/2 flex flex-col gap-4">
          <div className="w-full h-[380px] flex items-center border-secondary rounded-lg">
            <Image
              className="w-full h-[345px] py-4"
              src={data.svg}
              width={0}
              height={0}
              alt=""
            />
          </div>
          <div className="flex gap-4">
            <div className="w-1/6 h-[56px] flex items-center border-secondary rounded-lg">
              <Image
                className="w-full h-[48px] py-1"
                src={data.svg}
                width={0}
                height={0}
                alt=""
              />
            </div>
            <div className="w-1/6 h-[56px] flex items-center border-secondary rounded-lg">
              <Image
                className="w-full h-[48px] py-1"
                src={data.svg}
                width={0}
                height={0}
                alt=""
              />
            </div>
            <div className="w-1/6 h-[56px] flex items-center border-secondary rounded-lg">
              <Image
                className="w-full h-[48px] py-1"
                src={data.svg}
                width={0}
                height={0}
                alt=""
              />
            </div>
            <div className="w-1/6 h-[56px] flex items-center border-secondary rounded-lg">
              <Image
                className="w-full h-[48px] py-1"
                src={data.svg}
                width={0}
                height={0}
                alt=""
              />
            </div>
            <div className="w-1/6 h-[56px] flex items-center border-secondary rounded-lg">
              <Image
                className="w-full h-[48px] py-1"
                src={data.svg}
                width={0}
                height={0}
                alt=""
              />
            </div>
            <div className="w-1/6 h-[56px] flex items-center border-secondary rounded-lg">
              <Image
                className="w-full h-[48px] py-1"
                src={data.svg}
                width={0}
                height={0}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <p className="text-[#00B517] flex gap-2">
            <Image src={"/available.svg"} width={17} height={13} alt="" />
            Còn hàng
          </p>
          <h2 className="text-4xl">{data.name}</h2>
          <div className="py-3">
            <ul className="flex gap-10">
              <li className="flex items-center gap-2">
                <div className="w-[15px] h-[18px]">
                  <Image
                    className="w-full h-auto"
                    src={"/vector-3.svg"}
                    height={0}
                    width={0}
                    alt={""}
                  />
                </div>
                <div className="flex">
                  <h3 className="flex text-[#787A80] text-sm gap-1 leading-6 items-center">
                    <span className="pr-1">50</span>Comment
                  </h3>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-[15px] h-[18px]">
                  <Image
                    className="w-full h-auto"
                    src={"/vector-4.svg"}
                    height={0}
                    width={0}
                    alt={""}
                  />
                </div>
                <div className="flex">
                  <h3 className="flex text-[#787A80] text-sm gap-1 leading-6 items-center">
                    <span className="pr-1">50</span>Đã bán
                  </h3>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex bg-[#FFF0DF] h-[72px]">
            <div className="flex flex-col p-8 justify-center w-full items-center">
              <p className="text-[#FA3434] font-semibold">100.000</p>
              <span className="text-[#606060] text-xs -mt-1">
                Cho đơn trên 200.000
              </span>
            </div>
            <div className="flex flex-col p-8 justify-center w-full items-center">
              <p className="font-semibold">95.000</p>
              <span className="text-[#606060] text-xs -mt-1">
                Cho đơn trên 200.000
              </span>
            </div>
          </div>
          <div className="border-b-[1px] border-b-solid border-b-[#E0E0E0] py-4">
            <div className="flex">
              <label className="text-[#8B96A5] w-[30%]">Giá:</label>
              <p>{data.price}</p>
            </div>
          </div>
          <div className="border-b-[1px] border-b-solid border-b-[#E0E0E0] py-4">
            <div className="flex">
              <label className="text-[#8B96A5] w-[30%]">Loại:</label>
              <p>Trang phục</p>
            </div>
            <div className="flex">
              <label className="text-[#8B96A5] w-[30%]">Số lượng:</label>
              <p>123</p>
            </div>
            <div className="flex">
              <label className="text-[#8B96A5] w-[30%]">Thương hiệu:</label>
              <p>Coolmate</p>
            </div>
          </div>
          <div className="border-b-[1px] border-b-solid border-b-[#E0E0E0] py-4">
            <div className="flex">
              <label className="text-[#8B96A5] w-[30%]">Label 1:</label>
              <p>Label content</p>
            </div>
            <div className="flex">
              <label className="text-[#8B96A5] w-[30%]">Label 2:</label>
              <p>Label content</p>
            </div>
            <div className="flex">
              <label className="text-[#8B96A5] w-[30%]">Label 3:</label>
              <p>Label content</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3">
        <div className="border-secondary rounded-lg h-[325px] p-4">
          <div className="flex items-center pb-4 gap-4 border-b-[1px] border-b-solid border-b-[#E0E0E0]">
            <div className="flex items-center justify-center w-[48px] h-[48px] bg-[#C6F3F1]">
              <span className="text-[#4CA7A799] text-2xl font-semibold">S</span>
            </div>
            <div className="">
              <h3>Đơn vị vận chuyển</h3>
              <span>Shopee Express</span>
            </div>
          </div>
          <div className="py-4">
            <div className="flex mb-3 items-center gap-4">
              <div className="w-[15px] h-[18px]">
                <Image
                  className="w-full h-auto"
                  src={"/vector-1.svg"}
                  height={0}
                  width={0}
                  alt={""}
                />
              </div>
              <h4 className="leading-6">SĐT: 1900 6092</h4>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[15px] h-[18px]">
                <Image
                  className="w-full h-auto"
                  src={"/vector-2.svg"}
                  height={0}
                  width={0}
                  alt={""}
                />
              </div>
              <h4 className="leading-6">Thêm mô tả ở đây nhá</h4>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 py-4">
            <button className="w-[70%] p-1 bg-gradient-primary text-white rounded-lg mb-2 hover:brightness-75">
              Đặt hàng
            </button>
            <button className="w-[70%] p-1 bg-white text-[#0067FF] border-secondary rounded-lg mb-2 hover:brightness-75">
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
        <div className="flex justify-center py-6">
          <button className="flex gap-2 items-center">
            <div className="w-[20px] h-[18px]">
              <Image
                className="w-full h-auto"
                width={0}
                height={0}
                src={"/like.svg"}
                alt=""
              />
            </div>
            <h3 className="text-[#0067FF]">Yêu thích</h3>
          </button>
        </div>
      </div>
    </div>
  );
}
