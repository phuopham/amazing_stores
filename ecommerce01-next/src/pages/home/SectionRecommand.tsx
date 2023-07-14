import SectionTitle from "@/components/common/SectionTitle";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const listItems = [
  {
    description: "Áo cộc tay thương hiệu Coolmate",
    price: "300.000",
    svg: "/suggestion-1.svg",
  },
  {
    description: "Áo ấm dành cho mùa đông lạnh giá",
    price: "1.000.000",
    svg: "/suggestion-2.svg",
  },
  {
    description: "Suit nam cao cấp đến từ thương hiệu Việt",
    price: "500.000",
    svg: "/suggestion-3.svg",
  },
  {
    description: "Ví da bò nhưng được làm từ nhựa tổng hợp",
    price: "100.000",
    svg: "/suggestion-1.svg",
  },
  {
    description: "Balo cho học sinh hoặc du lịch",
    price: "200.000",
    svg: "/suggestion-1.svg",
  },
  {
    description: "Quần đùi nam mùa hè mặc vào hơi nóng",
    price: "4.000.000",
    svg: "/suggestion-1.svg",
  },
  {
    description: "Tai nghe Trung Quốc chất lượng cao",
    price: "2.000.000",
    svg: "/suggestion-1.svg",
  },
  {
    description: "Cũng là balo vì không có hình thay thế",
    price: "2.000.000",
    svg: "/suggestion-1.svg",
  },
  {
    description: "Chum đi đái dành cho trẻ em",
    price: "2.000.000",
    svg: "/suggestion-1.svg",
  },
  {
    description: "Thùng rác thông minh Trung Quốc",
    price: "2.000.000",
    svg: "/suggestion-1.svg",
  },
];

function SectionRecommand() {
  const route = useRouter();

  return (
    <div className="w-full px-[6.8%]">
      <SectionTitle title="Mua đi mà" />
      <div className="w-full grid grid-cols-5 gap-4 h-[640px]">
        {listItems.map((item, index) => (
          <div
            key={index}
            className="col-span-1 h-[310px]"
            onClick={() =>
              route.push({
                pathname: "/products/[id]",
                query: { id: index + 1 },
              })
            }
          >
            <div className="h-full p-2 rounded-lg bg-white border-secondary group hover:cursor-pointer hover:border-[#0D6EFD]">
              <div className="flex p-4 items-center h-[200px] mb-2">
                <Image
                  className="w-full h-full group-hover:brightness-125"
                  src={item.svg}
                  alt=""
                  width="150"
                  height="170"
                />
              </div>
              <div className="flex flex-col px-6">
                <h4 className="font-semibold">{item.price}</h4>
                <p className="text-[#8B96A5]">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionRecommand;
