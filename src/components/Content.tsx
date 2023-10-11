import EggImg from "../assets/images/desktop/image-transform.jpg";
import PinkCup from "../assets/images/desktop/image-stand-out.jpg";

export default function Content() {
  return (
    <>
      <div className="content-container">
        <div className="content-text">
         <div className="content-text-container">
         <h2>
            Transform your <br />
            brand
          </h2>
          <p>
            We are a full-service creative agency specializing in
            helping brands grow fast. Engage your clients through
            compelling visuals that do most of the marketing for you.
          </p>
          <h3>Learn More</h3>
         </div>
        </div>

        <img className="content-img" src={EggImg} alt="egg-img" />
        <img className="content-img" src={PinkCup} alt="pick-cup" />
        <div className="content-text">
        <div className="content-text-container-two">
          <h2>
            Stand out to the right audience
          </h2>
          <p>
            Using a collaborative formula of designers, researchers, <br />
            photographers, videographers, and copywriters, we'll <br />
            build and extend your brand in digital places.
          </p>
          <h3>Learn More</h3>
          </div>
        </div>
        <div className="content-img-cherry">
        <div className="content-img-cherry-text">
        <h2>Graphic Design</h2>
          <p>
            Great design makes you memorable. We deliver <br />
            artwork that underscores your brand message <br />
            and captures potential clients attention.
          </p>
        </div>
        </div>
        <div className="content-img-orange">
        <div className="content-img-orange-text">
        <h2>Photography</h2>
          <p>
            Increase your credibility by getting the most <br />
            stunning, high-quality photos that improve your <br />
            business image.
          </p>
        </div>
        </div>
      </div>
    </>
  );
}
