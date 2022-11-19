import React from "react";

export default function Header({ title, subheader, imgSrc }) {
  return (
    <header
      className={`w-screen relative flex justify-center flex-col py-12 items-center bg-no-repeat bg-cover bg-center ${imgSrc}`}
    >
      <div className="z-50">
        <h2>{title}</h2>
        <p>{subheader}</p>
      </div>
      <div className="h-full w-full absolute top-0 left-0 bg-[url('/assets/texture.png')]"></div>
      <div className="h-full w-full absolute top-0 left-0 bg-black opacity-40"></div>
    </header>
  );
}
