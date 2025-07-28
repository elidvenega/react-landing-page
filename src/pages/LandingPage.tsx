import OrangeHeader from "../components/OrangeHeader";
import HamburgerMenu from "../components/HamburgerMenu";
import ContentComponent from "../components/ContentComponent";
import Testimonials from "../components/Testimonials";
import FoodImages from "../components/FoodImages";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <>
      <OrangeHeader title="we are creatives" />
      <HamburgerMenu />
      <ContentComponent />
      <Testimonials subTitle="client testimonials" />
      <FoodImages />
      <Footer footerTitle="sunnyside" />
    </>
  );
}
