import React from "react";

interface CardInt {
  icon: React.ReactNode;
  TextStr: React.ReactNode;
  AboutStr: React.ReactNode;
}

export default function CardUser({icon, TextStr, AboutStr}: CardInt) {


  return (
    <div className="w-1/3 h-36 bg-amber-200 flex flex-col justify-center rounded-lg">
      <h1>{icon}</h1>
      <h2>{TextStr}</h2>
      <h3>{AboutStr}</h3>
    </div>
  )
}