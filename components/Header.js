import React from "react";



export default function Header({title, imgSrc, subheader}) {
  return (
    <header
      className={`w-screen overflow-hidden relative flex justify-center flex-col py-20 items-center bg-no-repeat bg-cover ${imgSrc}`}
    >
      <div className="z-50 text-center">
        <h2 className="text-6xl">{title}</h2>
        <p className="text-4xl my-6">{subheader}</p>
      </div>
      <div className="h-full w-full absolute top-0 left-0 bg-[url('/assets/texture.png')]"></div>
      <div className="h-full w-full absolute top-0 left-0 bg-black opacity-50"></div>
    </header>
  );
}
