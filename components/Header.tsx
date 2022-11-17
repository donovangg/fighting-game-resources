import React from "react";

export default function Header({ title, subheader }) {
  return (
    <header className="flex flex-col justify-center items-center py-20">
      <h2>{title}</h2>
      <p>{subheader}</p>
    </header>
  );
}
