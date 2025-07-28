import { foodImages } from "../utilities/utilitiy-variables";
export default function FoodImages() {
  return (
    <div className="food-images-container">
      {foodImages.map((img) => (
        <img className="food-images" src={img} alt="food-img" />
      ))}
    </div>
  );
}
