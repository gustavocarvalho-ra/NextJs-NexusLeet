import React from "react";

interface CardInt {
  icon: React.ReactNode;
  TextStr: React.ReactNode;
  AboutStr: React.ReactNode;
}

export default function CardUserConfg({icon, TextStr, AboutStr}: CardInt) {


  return (
    <div className="w-[32%] h-36 bg-(--mod) flex flex-col justify-center rounded-lg p-3.5 shadow-lg/20 transition duration-300 ease-in-out  hover:shadow-lg/30 cursor-pointer hover:bg-(--text-amber)">
      <h1 className="font-black h-1/4 text-xl">{icon}</h1>
      <h2 className="font-semibold h-1/4">{TextStr}</h2>
      <h4 className="font-extralight h-1/2 text-sm">{AboutStr}</h4>
    </div>
  )
}