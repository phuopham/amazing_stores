import Image from "next/image";
import Link from "next/link";
import React from "react";

function ListItems({ data }: { data: any }) {
  //   console.log(data);
  return (
    <div className="col-span-3 h-[72vh] border border-gray-300 border-solid border-[1px] rounded-lg bg-white">
      <div className="px-8 h-[60vh] overflow-y-auto scroll">
        {data &&
          data.map((item: any, index: number) => (
            <div
              key={index}
              className="pt-6 first:border-none border-t-gray-300 border-t-solid border-t-[1px]"
            >
              <div className="grid grid-cols-12 gap-4 h-[80px] mb-4">
                <div className="col-span-1 p-1 flex items-start justify-center">
                  <div className="p-4 w-[80px] h-[80px] flex border border-gray-300 border-solid border-1px rounded-lg">
                    <Image
                      width="52"
                      height="59"
                      className="w-full"
                      src={item.svg}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-span-11 flex justify-between pr-8">
                  <div>
                    <p className="text-[#1C1C1C] text-md font-semibold">
                      {item.name}
                    </p>
                    <span className="italic opacity-75">
                      {item.description}
                    </span>
                  </div>
                  <div>
                    <p>{item.price}</p>
                    <p>Số lượng: {item.quantiy}</p>
                  </div>
                </div>
              </div>
              <div className="ml-[8%] mb-6">
                <button className="border-[##DEE2E7] border-[1px] border-solid text-[#FA3434] py-2 px-4 rounded-lg mr-4 hover:bg-[#FA3434] hover:text-white font-semibold">
                  Xóa
                </button>
                <button className="border-[##DEE2E7] border-[1px] border-solid text-[#0D6EFD] py-2 px-4 rounded-lg hover:bg-[#0D6EFD] hover:text-white font-semibold">
                  Xem thông tin
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-between mx-8 pt-5 border-t-gray-300 border-t-solid border-t-[1px]">
        <button className="flex group items-center border-[##0D6EFD] border-[1px] border-solid text-white py-2 px-6 rounded-lg bg-[#0D6EFD] hover:text-white font-semibold">
          <Image
            width="14"
            height="14"
            className="mr-3 transition duration-300 ease-in-out opacity-50 group-hover:-translate-x-2 group-hover:opacity-100"
            src="/previous.svg"
            alt=""
          />
          Trở về cửa hàng
        </button>
        <button className="border-[##DEE2E7] border-[1px] border-solid text-[#0D6EFD] py-2 px-4 rounded-lg hover:bg-[#0D6EFD] hover:text-white font-semibold">
          Xóa hết
        </button>
      </div>
    </div>
  );
}

export default ListItems;
