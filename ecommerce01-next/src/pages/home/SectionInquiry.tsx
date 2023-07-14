import Image from "next/image";
import { useRouter } from "next/router";
import React, { ChangeEvent, FormEvent, useRef, useState } from "react";

export default function SectionInquiry() {
  const route = useRouter();

  function handleSubmit(event: FormEvent<HTMLInputElement> | FormEvent<HTMLSelectElement> | any): void {
    event.preventDefault();

    const data = {
      name: event.target.product.value,
      infomation: event.target.information.value,
      quantity: event.target.quantity.value,
      select: event.target.select.value
    }

    console.log(data);

    localStorage.setItem("product", JSON.stringify(data));

    event.target.reset();
  }

  return (
    <div className="box-container h-[420px] relative flex justify-center mt-6">
      <Image
        className="w-full h-auto rounded-lg"
        src={"/home-4.png"}
        width={1190}
        height={446}
        alt=""
        priority
      />
      <div className="absolute top-0 right-[7%] bottom-0 left-[7%] bg-inquiry rounded-lg"></div>
      <div className="absolute flex top-0.5 right-[8%] left-[8%] p-10">
        <div className="w-1/2 flex flex-col">
          <h2 className="text-white text-3xl font-bold mb-2">
            Bạn muốn yêu cầu thêm các mặt khác
          </h2>
          <span className="text-white w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt.
          </span>
        </div>
        <div className="w-1/2 bg-[white] rounded-lg h-[346px]">
          <form onSubmit={handleSubmit} className="flex flex-col p-5 gap-4" action="/api/form-contact" method="post">
            <h3 className="text-2xl font-bold">Điền các thông tin về sản phẩm</h3>
            <input
              className="p-2 border-secondary rounded-lg"
              type="text"
              id="product"
              name="product"
              placeholder="Bạn đang cần gì"
              required
            />
            <textarea
              className="p-2 border-secondary rounded-lg h-[73px]"
              id="information"
              name="information"
              placeholder="Các thông tin khác"
              required
            />
            <div>
              <input
                className="p-2 border-secondary rounded-lg mr-4"
                type="number"
                id="quantity"
                name="quantity"
                placeholder="Số lượng"
                required
              />
              <select
                className="p-2 border-secondary rounded-lg"
                name="select"
                id="form_select"
              >
                <option value={"Label 1"}>Label 1</option>
                <option value={"Label 2"}>Label 2</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-[14%] p-1 py-2 bg-gradient-primary text-white font-medium rounded-lg ml-4 hover:brightness-75"
            >
              Yêu cầu
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
