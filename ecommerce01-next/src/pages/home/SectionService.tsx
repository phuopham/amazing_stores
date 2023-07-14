import React from 'react'
import Image from "next/image";
import SectionTitle from '@/components/common/SectionTitle';


const listItems = [
  { description: "Hàng lấy trực tiếp từ nhà phân phối", icon: "/service-icon-1.svg", svg: "/service-1.svg"},
  { description: "Chăm sóc khách hàng tận tình", icon: "/service-icon-2.svg", svg: "/service-2.svg"},
  { description: "Nhanh chóng, mọi lúc, mọi nơinơi", icon: "/service-icon-3.svg", svg: "/service-3.svg"},
  { description: "An toàn và bảo mật trong vận chuyển", icon: "/service-icon-4.svg", svg: "/service-4.svg"}
]

function SectionService() {
  return (
    <div className="w-full px-[6.8%]">
        <SectionTitle title="Dịch vụ tiện ích khác" />
        <div className="w-full grid grid-cols-4 gap-4">
          {listItems.map((item, index) => (
            <div key={index} className="relative h-[200px] col-span-1 group hover:cursor-pointer">
              <div className="h-[200px] rounded-lg bg-white border-secondary group-hover:border-[#0D6EFD]">
                <div className="w-full h-[120px] overflow-hidden">
                  <Image className="w-full bg-[#3f3f3f] group-hover:brightness-150 rounded-t-lg" src={item.svg} alt="" width="303" height="120" priority/>
                </div>
                <div className="px-6 py-2 w-2/3 h-[80px]">
                  <h3 className="text-[#1C1C1C] font-semibold text-xl">{item.description}</h3>
                </div>
              </div>
              <div className="flex items-center justify-center absolute top-[45%] right-10 bg-[#D1E7FF] w-1/6 h-1/3 flex p-5 rounded-full border border-[2px] border-solid border-[#FFFFFF] hover:-translate-y-3">
                <Image src={item.icon} alt="" width="18" height="18" />
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default SectionService