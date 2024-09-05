import EggImg from "../assets/images/desktop/image-transform.jpg";
import PinkCup from "../assets/images/desktop/image-stand-out.jpg";
import { Content } from "./Data.tsx";

const contentData: Content = {
  cellBlocks: [
    {
      heading: `Transform your brand`,
      title: `Learn More`,
      content: ` We are a full-service creative agency specializing in
      helping brands grow fast. Engage your clients through
        compelling visuals that do most of the marketing for you.`,
    },
    {
      heading: `Stand out to the right audience`,
      title: `Learn More`,
      content: `
      Using a collaborative formula of designers, researchers,
      photographers, videographers, and copywriters, we'll 
      build and extend your brand in digital places.
      `,
    },
    {
      heading: `Graphic Design`,
      content: `
      Great design makes you memorable. We deliver 
      artwork that underscores your brand message 
      and captures potential clients attention.
      `,
    },
    {
      heading: `Photography`,
      content: `
      Increase your credibility by getting the most 
      stunning, high-quality photos that improve your 
      business image.
      `,
    },
  ],
};

export default function ContentComponent() {
  return (
    <>
      <div className="content-container">
        <div className="content-text">
          <div className="content-text-container">
            <h2>{contentData.cellBlocks[0].heading}</h2>
            <p>{contentData.cellBlocks[0].content}</p>
            <h3>{contentData.cellBlocks[0].title}</h3>
          </div>
        </div>

        <img className="content-img" src={EggImg} alt="egg-img" />
        <img className="content-img" src={PinkCup} alt="pick-cup" />
        <div className="content-text">
          <div className="content-text-container-two">
            <h2>{contentData.cellBlocks[1].heading}</h2>
            <p>{contentData.cellBlocks[1].content}</p>
            <h3>{contentData.cellBlocks[1].title}</h3>
          </div>
        </div>
        <div className="content-img-cherry">
          <div className="content-img-cherry-text">
            <h2>{contentData.cellBlocks[2].heading}</h2>
            <p> {contentData.cellBlocks[2].content}</p>
          </div>
        </div>
        <div className="content-img-orange">
          <div className="content-img-orange-text">
            <h2>{contentData.cellBlocks[3].heading}</h2>
            <p>{contentData.cellBlocks[3].content}</p>
          </div>
        </div>
      </div>
    </>
  );
}
