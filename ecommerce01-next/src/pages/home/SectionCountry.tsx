import SectionTitle from "@/components/common/SectionTitle";
import Image from "next/image";
import React from "react";

const listItems = [
  { name: "Great Britain", svg: "/country.svg", storename: "shopname.co.uk" },
  { name: "Great Britain", svg: "/country.svg", storename: "shopname.co.uk" },
  { name: "Great Britain", svg: "/country.svg", storename: "shopname.co.uk" },
  { name: "Great Britain", svg: "/country.svg", storename: "shopname.co.uk" },
  { name: "Great Britain", svg: "/country.svg", storename: "shopname.co.uk" },
  { name: "Great Britain", svg: "/country.svg", storename: "shopname.co.uk" },
  { name: "Great Britain", svg: "/country.svg", storename: "shopname.co.uk" },
  { name: "Great Britain", svg: "/country.svg", storename: "shopname.co.uk" },
  { name: "Great Britain", svg: "/country.svg", storename: "shopname.co.uk" },
  { name: "Great Britain", svg: "/country.svg", storename: "shopname.co.uk" },
];

export default function SectionCountry() {
  return (
    <div className="box-container mb-[125px]">
      <SectionTitle title="Đã có mặt ở các quốc gia" />
      <div className="grid grid-cols-5 gap-3">
        {listItems.map((item, index) => (
          <div key={index} className="index col-span-1 flex items-center gap-3">
            <div>
              <Image src={item.svg} width={28} height={20} alt="" priority />
            </div>
            <div className="flex flex-col">
              <p>{item.name}</p>
              <span className="text-xs text-[#8B96A5] -mt-1">{item.storename}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
