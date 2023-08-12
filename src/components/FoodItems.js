import React from "react";
import { CDN_IMG } from "../utils/constants";

const FoodItems = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-black border-b-2 flex justify-between "
        >
          <div className="p-2 text-left w-9/12">
            <span className="text-xl font-bold text-slate-900">
              {item.card.info.name}-{" "}
            </span>
            <span>
              ₹-{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </span>
            <p>{item.card.info.description}</p>
          </div>

          <div className="w-3/12 p-4">
            <img
              alt={item.card.info.name}
              src={CDN_IMG + item.card.info.imageId}
              className="w-auto"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodItems;
