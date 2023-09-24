import "./App.css";
import OrangeHeader from "./components/OrangeHeader";
import HamburgerMenu from "./components/HamburgerMenu";
import Content from "./components/Content";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <OrangeHeader />
      <HamburgerMenu />
      <Content />
      <Testimonials />
      <Footer />
    </>
  );
}
