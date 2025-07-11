import React from "react";

interface CardInt {
  icon: React.ReactNode;
  TextStr: React.ReactNode;
  AboutStr: React.ReactNode;
}

export default function CardUser({icon, TextStr, AboutStr}: CardInt) {


  return (
    <div className="w-1/3 h-36 bg-(--mod) flex flex-col justify-center rounded-lg p-3.5">
      <h1 className="font-black h-1/5 text">{icon}</h1>
      <h2 className="font-semibold h-1/5">{TextStr}</h2>
      <h3 className="font-extralight h-3/5">{AboutStr}</h3>
    </div>
  )
}