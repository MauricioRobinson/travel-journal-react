import React from "react";

function Card({ item }) {
  return (
    <div className="max-w-md md:max-w-4xl lg:max-w-5xl xl:max-w-7xl overflow-hidden mb-16 mx-auto">
      <div className="md:flex md:items-center">
        <div className="md:shrink-0">
          <img
            src={`./images/${item.imageUrl}`}
            alt="Giza's Pyramid"
            className="w-full h-60 md:h-72 md:w-56 object-cover rounded-md"
          />
        </div>
        <div className="mx-4">
          <div className="block sm:flex sm:justify-between sm:items-center mb-4">
            <div className="flex items-center">
              <img
                src="./images/ic_location_on_128_28437.webp"
                alt="location icon"
                className="w-4 h-4 mr-1"
              />
              <span className="font-semibold mr-8 text-lg tracking-wider">
                {item.location}
              </span>
            </div>
            <span className="text-slate-400 font-semibold underline underline-offset-1 hover:text-slate-500">
              <a href={item.googleMapsLink}>View on Google Maps</a>
            </span>
          </div>
          <h1 className="font-bold text-2xl mb-2">{item.title}</h1>
          <span className="font-bold text-xs">
            {item.startDate} - {item.endDate}
          </span>
          <div className="overflow-auto md:overflow-hidden h-36 mt-4">
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Card };
