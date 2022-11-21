import React from "react";

export default function Header({ title, subheader, imgSrc }) {
  return (
    <header
      className={`w-screen relative flex justify-center flex-col py-20 items-center bg-no-repeat bg-cover ${imgSrc}`}
    >
      <div className="z-50 text-center">
        <h2 className="text-8xl">{title}</h2>
        <p className="text-4xl my-6">{subheader}</p>
      </div>
      <div className="h-full w-full absolute top-0 left-0 bg-[url('/assets/texture.png')]"></div>
      <div className="h-full w-full absolute top-0 left-0 bg-black opacity-40"></div>
    </header>
  );
}
