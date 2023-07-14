import Link from "next/link";
import React from "react";

const listItems = [
  { name: "Tất cả", path: "/" },
  { name: "Điện thoại di động", path: "/category" },
  { name: "Trang phục", path: "/" },
  { name: "Đồ gia dụng", path: "/" },
  { name: "Đồ điện tử", path: "/" },
  { name: "Công cụ", path: "/" },
  { name: "Thể thao", path: "/" },
  { name: "Mẹ và bé", path: "/" },
  { name: "Thú cưng", path: "/" },
];

function Category() {
  return (
    <div className="w-1/4 h-[100vh] flex flex-col mr-4">
      <h2 className="text-xl font-bold my-6">Danh mục sản phẩm</h2>
      <ul>
        {listItems.map((item, index) => (
          <Link key={index} href={item.path}>
            <li className="py-2 text-xl text-[#505050]">
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Category;
