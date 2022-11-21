import React from "react";

export default function ResourceCard({ title, link, type }) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to bg-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
      <div className="flex relative justify-center">
        <div className="block rounded-lg shadow-lg bg-gray-800 border-gray-700  max-w-sm text-center">
          <div className="py-3 px-6 border-b border-gray-300 text-white">
            {type}
          </div>
          <div className="p-6">
            <h5 className="text-white text-xl font-medium mb-2">{title}</h5>
            <p className="text-gray-300 text-base mb-4">
              With supporting text below as a natural lead-in to additional
              content.
            </p>

            <a href={link} target="_blank">
              <button
                type="button"
                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                <div className="flex align-center items-center">
                  <div>Check It</div>
                  <div>
                    <svg
                      className="inline-block w-5 h-5 ml-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                    </svg>
                  </div>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
