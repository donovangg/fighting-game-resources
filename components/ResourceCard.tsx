import React from "react";

export default function ResourceCard({ title, link, type, description }) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to bg-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
      <div className="max-w-sm relative py-8 rounded bg-gray-800 border-gray-700 h-full overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-gray-100 mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </div>
  );
}
