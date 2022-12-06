import React from "react";

export default function Form() {
  return (
    <form
      action="https://formspree.io/f/mwkzjwzy"
      method="POST"
      className="w-7/12 bg-gray-800 p-6 rounded-lg mx-auto"
    >
      <div className="mb-6">
        <label
          htmlFor="countries"
          className="block mb-2 text-md font-medium text-gray-200"
        >
          What type of resource would this be categorized as?
        </label>
        <select
          id="type"
          name="type"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option>Wiki</option>
          <option>Guide</option>
          <option>Replays</option>
          <option>Forum</option>
          <option>Discord</option>
          <option>Subreddit</option>
          <option>Other</option>
        </select>
      </div>
      <div className="mb-6">
        <label
          htmlFor="category"
          className="block mb-2 text-md font-medium text-gray-200"
        >
          Where should this resource be placed?
        </label>
        <select
          id="type"
          name="category"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option>3D</option>
          <option>Airdashers</option>
          <option>Capcom</option>
          <option>French Bread</option>
          <option>Fundamentals</option>
          <option>NRS</option>
          <option>Other</option>
        </select>
      </div>
      <div className="mb-6">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-200"
        >
          Resource title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="El Fuerte RSF Tutorial"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          required
          minlength="3" maxlength="30"
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-200 ">
          Link to your resource
        </label>
        <input
          type="url"
          id="link"
          name="link"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="https://store.steampowered.com/app/1160330/Fight_of_Animals/"
          required
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}
