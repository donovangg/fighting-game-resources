import React from "react";

export default function ResourceCard({ title, link, type }) {
  return (
    <div className="flex justify-center">
      <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
        <div className="py-3 px-6 border-b border-gray-300 text-red-500">
          {type}
        </div>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
          <p className="text-gray-700 text-base mb-4">
            With supporting text below as a natural lead-in to additional
            content.
          </p>

          <a href={link} target="_blank">
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              {" "}
              Check It{" "}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
