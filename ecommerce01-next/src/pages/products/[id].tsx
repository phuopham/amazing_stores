import { useRouter } from 'next/router';
import React from 'react'
import Description from './Description';

const listItems = [
    {id:"1", name: "IPhone 13", price: "2.000.000", description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", svg: "/item-1.svg"},
    {id:"2", name: "Oppo Zen Flick", price: "2.000.000", description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", svg: "/item-2.svg"},
    {id:"3", name: "Samsung Note 12", price: "2.000.000", description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", svg: "/item-3.svg"},
    {id:"4", name: "Macbook Pro 16 inch", price: "2.000.000", description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", svg: "/item-4.svg"},
    {id:"5", name: "Apple Watch Gen 4", price: "2.000.000", description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", svg: "/item-1.svg"},
    {id:"6", name: "Apple Watch Gen 4", price: "2.000.000", description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", svg: "/item-3.svg"},
    {id:"7", name: "Apple Watch Gen 4", price: "2.000.000", description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", svg: "/item-2.svg"},
    {id:"8", name: "Apple Watch Gen 4", price: "2.000.000", description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", svg: "/item-1.svg"},
    {id:"9", name: "Apple Watch Gen 4", price: "2.000.000", description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", svg: "/item-4.svg"},
    {id:"10", name: "Apple Watch Gen 4", price: "2.000.000", description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", svg: "/item-1.svg"},
    {id:"11", name: "Apple Watch Gen 4", price: "2.000.000", description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", svg: "/item-2.svg"},
    {id:"12", name: "Apple Watch Gen 4", price: "2.000.000", description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", svg: "/item-1.svg"},
    {id:"13", name: "Apple Watch Gen 4", price: "2.000.000", description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", svg: "/item-3.svg"}
]

function ProductDetail() {
  const { query } = useRouter();
  const { id } = query;
  const product = listItems.find((item) => item.id === id);
  if(!product) {
    return <div className="w-full flex items-center px-[6.8%] bg-gray-200 h-[50vh] pt-6">
      <h4 className="text-2xl">Page not found</h4>
    </div>;
  }

  return (
    <div className="box-container bg-gray-100 h-[100vh]">
      <h3 className="py-6 text-[#8B96A5] text-lg">Thông tin sản phẩm: {id}</h3>
        <Description data = {product} />
    </div>
  )
}

export default ProductDetail