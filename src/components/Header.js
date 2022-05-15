import React from "react";

export default function Header() {
  return (
    <header className="w-full h-20 bg-red-400 rounded-t-lg flex justify-center items-center mx-auto mt-2">
      <div className="text-white flex justify-center items-center gap-2">
        <img
          src="./images/flatworldmap_118410.svg"
          alt="World map"
          className="w-10"
        />
        <p className="font-semibold">Recommended travel itinerary</p>
      </div>
    </header>
  );
}
