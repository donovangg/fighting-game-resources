import React from "react";


export default function ResourceCard({ title, link, type, description }) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to bg-purple-600 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-200"></div>
      <div className="max-w-[20rem] min-w-[20rem] max-h-60 grid grid-rows-2 relative py-8 rounded bg-gray-800 border-gray-700 h-full overflow-hidden shadow-lg">
        <div className="px-6 py-4 flex-auto">
          <h2 className="font-bold text-3xl text-gray-100 mb-2">{title}</h2>
          <p className="text-gray-400 text-base">{description}</p>
        </div>
        <div className="py-3 px-6 flex h-1/4 w-full absolute bottom-0 align-center">
          <a
            href={link}
            rel="noreferrer"
            target="_blank"
            className="inline-flex items-center text-purple-600 hover:underline"
          >
            Check it
            <svg
              className="w-5 h-5 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
