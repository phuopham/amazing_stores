import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";

const listItems = [
  { title: "Đồng hồ điện tử", price: "300.000", svg: "/item-1.svg" },
  { title: "Máy ảnh", price: "1.000.000", svg: "/item-2.svg" },
  { title: "Tai nghe", price: "500.000", svg: "/item-3.svg" },
  { title: "Đồ gia dụng", price: "100.000", svg: "/item-4.svg" },
  { title: "Phụ kiện", price: "200.000", svg: "/item-5.svg" },
  { title: "Laptops & PC", price: "4.000.000", svg: "/item-6.svg" },
  { title: "Máy tính bảng", price: "2.000.000", svg: "/item-7.svg" },
  { title: "Điện thoại", price: "2.000.000", svg: "/item-8.svg" },
];

function GroupItemB() {
  const route = useRouter();
  return (
    <div className="box-container flex h-[250px] rounded-lg mt-6">
      <div className="relative w-[20%] flex items-center bg-[#C4C4C4] rounded-l-lg">
        <Image
          className="h-full w-full rounded-l-lg"
          width="295"
          height="374"
          src="/home-2.svg"
          alt=""
        />
        <div className="absolute top-10 left-5">
          <h2 className="text-xl font-bold mb-4 w-2/3">
            Đồ điện tử và các phụ kiện
          </h2>
          <button className="px-4 py-2 bg-white font-semibold border-primary rounded-lg mb-2 hover:brightness-75">
            Khám phá
          </button>
        </div>
      </div>
      <div className="container h-full grid grid-cols-4 bg-white">
        {listItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-14 border [&:nth-child(4)]:rounded-tr-lg last:rounded-br-lg justify-center col-span-1 group hover:cursor-pointer hover:border-[#0D6EFD]"
            onClick={() =>
              route.push({
                pathname: "/products/[id]",
                query: { id: index + 1 },
              })
            }
          >
            <div className="flex flex-col">
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-[#8B96A5]">Giá từ</p>
              <span className="text-[#8B96A5]">{item.price}</span>
            </div>
            <div>
              <Image
                className="group-hover:contrast-125 hover:-translate-y-4"
                src={item.svg}
                alt=""
                width={60}
                height={70}
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroupItemB;
