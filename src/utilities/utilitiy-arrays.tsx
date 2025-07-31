import MilkImg from "../assets/images/desktop/image-gallery-milkbottles.jpg";
import OrangePlate from "../assets/images/desktop/image-gallery-orange.jpg";
import Cone from "../assets/images/desktop/image-gallery-cone.jpg";
import SugarCubes from "../assets/images/desktop/image-gallery-sugarcubes.jpg";

interface ArrayInfo {
  id?: number;
  image?: string;
  link?: string;
  alt?: string;
}

export const foodImages: ArrayInfo[] = [
  { id: 0, image: MilkImg, alt: "milk-image" },
  { id: 1, image: OrangePlate, alt: "orange-image" },
  { id: 2, image: Cone, alt: "cone-image" },
  { id: 3, image: SugarCubes, alt: "sugar-cubes-image" },
];

export const navLinks: ArrayInfo[] = [
  { id: 0, link: "About" },
  { id: 1, link: "Services" },
  { id: 2, link: "Projects" },
];
