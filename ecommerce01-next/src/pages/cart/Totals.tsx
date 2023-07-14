import React from "react";

function Totals({ data }: { data: any }) {
  let total = 0;
  let discount = 0;
  let shipping = 22000;

  // data.forEach((element: { price: number; quantity: number }) => {
  //   total += element.price * element.quantity;
  // });

  let pay = total - discount + shipping;

  // console.log(total);

  return (
    <div className="col-span-1 h-[30vh] p-4 border border-gray-300 border-solid border-1px rounded-lg bg-[#FFFFFF] px-6">
      <div className="border-b-gray-300 border-b-solid border-b-[1px]">
        <p className="flex justify-between mb-2">
          Thành tiền: <span>{data.length === 0 ? 0 : total}</span>
        </p>
        <p className="flex justify-between mb-2">
          Giảm giá: <span className="text-[#FA3434]">- {discount}</span>
        </p>
        <p className="flex justify-between mb-6">
          Shipping: <span className="text-[#00B517]">+ {shipping}</span>
        </p>
      </div>
      <p className="flex justify-between mt-6">
        Tổng cộng: <span className="text-[#1C1C1C]">{pay}</span>
      </p>
    </div>
  );
}

export default Totals;
