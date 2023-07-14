import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const listItems = [
  { title: "Đồng hồ điện tử", price: "300.000", svg: "/item-1.svg" },
  { title: "Máy ảnh", price: "1.000.000", svg: "/item-2.svg" },
  { title: "Tai nghe", price: "500.000", svg: "/item-3.svg" },
  { title: "Đồ gia dụng", price: "100.000", svg: "/item-4.svg" },
  { title: "Phụ kiện", price: "200.000", svg: "/item-5.svg" },
];

export default function SectionSale() {
  const route = useRouter();

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "April, 31, 2023";

  const getTime = (param:string) => {
    const time = Date.parse(param) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="box-container">
      <div className="h-[240px] grid grid-cols-7 rounded-lg bg-white">
        <div className="col-span-2 p-8 border-secondary rounded-l-lg">
          <h2 className="text-xl font-bold mb-2 w-2/3">
            Đồ điện tử và các phụ kiện
          </h2>
          <p className="mb-4 text-[#8B96A5]">Mua ngay kẻo lỡ</p>
          <div className="flex gap-2">
            <div className="flex flex-col items-center justify-center w-[45px] h-[50px] bg-[#606060] rounded-md">
              <p className="text-white font-bold">{days < 10 ? "0" + days : days}</p>
              <p className="text-white text-xs -mt-1 font-light">Days</p>
            </div>
            <div className="flex flex-col items-center justify-center w-[45px] h-[50px] bg-[#606060] rounded-md">
              <p className="text-white font-bold">{hours < 10 ? "0" + hours : hours}</p>
              <p className="text-white text-xs -mt-1 font-light">Hour</p>
            </div>
            <div className="flex flex-col items-center justify-center w-[45px] h-[50px] bg-[#606060] rounded-md">
              <p className="text-white font-bold">{minutes < 10 ? "0" + minutes : minutes}</p>
              <p className="text-white text-xs -mt-1 font-light">Min</p>
            </div>
            <div className="flex flex-col items-center justify-center w-[45px] h-[50px] bg-[#606060] rounded-md">
              <p className="text-white font-bold">{seconds < 10 ? "0" + seconds : seconds}</p>
              <p className="text-white text-xs -mt-1 font-light">Sec</p>
            </div>
          </div>
        </div>
        {listItems.map((item, index) => (
          <div
            key={index}
            className="col-span-1 flex flex-col justify-center border-secondary items-center last:rounded-r-lg group hover:cursor-pointer"
            onClick={() =>
              route.push({
                pathname: "/products/[id]",
                query: { id: index + 1 },
              })
            }
          >
            <div className="w-[140px] h-[140px] p-7 flex items-center justify-center mb-2 hover:-translate-y-4">
              <Image src={item.svg} width={101} height={121} alt="" priority />
            </div>
            <h4 className="font-semibold mb-2">{item.title}</h4>
            <div className="flex py-1 justify-center w-[60px] bg-[#FFE3E3] rounded-xl">
              <span className="text-[#EB001B] text-[14px]">-25%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
