import EggImg from "../assets/images/desktop/image-transform.jpg";
import PinkCup from "../assets/images/desktop/image-stand-out.jpg";

interface Content {
  paragraphOne: string;
  paragraphTwo: string;
  learnMoreHeading: string;
  audienceHeading: string;
  designHeading: string;
  photographyHeading: string;
}

const data: Content = {
  paragraphOne: `
  We are a full-service creative agency specializing in
  helping brands grow fast. Engage your clients through
  compelling visuals that do most of the marketing for you.
  `,
  paragraphTwo: `
  Using a collaborative formula of designers, researchers,
  photographers, videographers, and copywriters, we'll 
  build and extend your brand in digital places.
  `,
  learnMoreHeading: `Learn More`,
  audienceHeading: `Stand out to the right audience`,
  designHeading: `Graphic Design`,
  photographyHeading: `Photography`,
};

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
            <p>{data.paragraphOne}</p>
            <h3>{data.learnMoreHeading}</h3>
          </div>
        </div>

        <img className="content-img" src={EggImg} alt="egg-img" />
        <img className="content-img" src={PinkCup} alt="pick-cup" />
        <div className="content-text">
          <div className="content-text-container-two">
            <h2>{data.audienceHeading}</h2>
            <p>{data.paragraphTwo}</p>
            <h3>{data.learnMoreHeading}</h3>
          </div>
        </div>
        <div className="content-img-cherry">
          <div className="content-img-cherry-text">
            <h2>{data.designHeading}</h2>
            <p>
              Great design makes you memorable. We deliver <br />
              artwork that underscores your brand message <br />
              and captures potential clients attention.
            </p>
          </div>
        </div>
        <div className="content-img-orange">
          <div className="content-img-orange-text">
            <h2>{data.photographyHeading}</h2>
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
