import "./App.css";
import OrangeHeader from "./components/OrangeHeader";
import HamburgerMenu from "./components/HamburgerMenu";
import Content from "./components/Content";
import Testimonials from "./components/Testimonials";
import FoodImages from "./components/FoodImages";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <OrangeHeader title="we are creatives" />
      <HamburgerMenu />
      <Content />
      <Testimonials subTitle="client testimonials" />
      <FoodImages />
      <Footer />
    </>
  );
}
