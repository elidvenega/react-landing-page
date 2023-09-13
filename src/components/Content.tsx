import EggImg from "../assets/images/desktop/image-transform.jpg";
import PinkCup from "../assets/images/desktop/image-stand-out.jpg";

export default function Content() {
  return (
    <>
      <div className="content-container">
        <div className="content-text">
          <h2 className="m-1">
            Transform your <br />
            brand
          </h2>

          <p className="m-1">
            We are a full-service creative agency specializing in
            <br />
            helping brands grow fast. Engage your clients through
            <br />
            compelling visuals that do most of the marketing for you.
          </p>
          <h3>Learn More</h3>
        </div>
        
        <img className="content-img" src={EggImg} alt="egg-img" />
        <img className="content-img" src={PinkCup} alt="pick-cup" />
        <div className="content-text">
          <h2 className="">
            Stand out to the right <br /> audience{" "}
          </h2>
          <p className="">
            Using a collaborative formula of designers, researchers, <br />
            photographers, videographers, and copywriters, we'll <br />
            build and extend your brand in digital places.
          </p>
          <h3 className="">Learn More</h3>
        </div>
        <div className="content-img-cherry">
          <h2>Graphic Design</h2>
          <p>
            Great design makes you memorable. We deliver <br />
            artwork that underscores your brand message <br />
            and captures potential clients attention.{" "}
          </p>
        </div>
        <div className="content-img-orange">
          <h2>Photography</h2>
          <p>
            Increase your credibility by getting the most <br />
            stunning, high-quality photos that improve your <br />
            business image.
          </p>
        </div>
      </div>
    </>
  );
}
