import "./css/App.css";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import ErrorBoundary from "./errorboundary/ErrorBoundary";

export default function App() {
  return (
    <>
      <ErrorBoundary>
        <LandingPage />
        <Footer footerTitle="sunnyside" />
      </ErrorBoundary>
    </>
  );
}
