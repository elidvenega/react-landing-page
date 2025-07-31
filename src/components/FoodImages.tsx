import React from "react";
import { foodImages } from "../utilities/utilitiy-arrays";
export default function FoodImages() {
  return (
    <div className="food-images-container">
      {foodImages.map((food) => (
        <React.Fragment key={food.id}>
          <img className="food-images" src={food.image} alt={food.alt} />
        </React.Fragment>
      ))}
    </div>
  );
}
