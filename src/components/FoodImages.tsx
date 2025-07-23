import MilkImg from "../assets/images/desktop/image-gallery-milkbottles.jpg";
import OrangePlate from "../assets/images/desktop/image-gallery-orange.jpg";
import Cone from "../assets/images/desktop/image-gallery-cone.jpg";
import SugarCubes from "../assets/images/desktop/image-gallery-sugarcubes.jpg";

const foodImages: string[] = [MilkImg, OrangePlate, Cone, SugarCubes];

export default function FoodImages() {
  return (
    <div className="food-images-container">
      {foodImages.map((img) => (
        <img className="food-images" src={img} alt="food-img" />
      ))}
    </div>
  );
}
