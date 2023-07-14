import React from "react";

export default function SectionTitle(props: { title: string }) {
  return (
    <h1 className="py-8 text-2xl font-bold text-[#1C1C1C]">{props.title}</h1>
  );
}
