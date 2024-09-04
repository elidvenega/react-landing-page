import MilkImg from "../assets/images/desktop/image-gallery-milkbottles.jpg";
import OrangePlate from "../assets/images/desktop/image-gallery-orange.jpg";
import Cone from "../assets/images/desktop/image-gallery-cone.jpg";
import SugarCubes from "../assets/images/desktop/image-gallery-sugarcubes.jpg";

export default function FoodImages() {
  return (
    <div className="food-images-container">
      <img className="food-images" src={MilkImg} alt="milk-img" />
      <img className="food-images" src={OrangePlate} alt="orange-img" />
      <img className="food-images" src={Cone} alt="cone-img" />
      <img className="food-images" src={SugarCubes} alt="sugar-img" />
    </div>
  );
}
