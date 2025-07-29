import React from "react";

import EggImg from "../assets/images/desktop/image-transform.jpg";
import PinkCup from "../assets/images/desktop/image-stand-out.jpg";
import { Content } from "../data/Data.tsx";

const contentData: Content = {
  cellBlocks: [
    {
      heading: "Transform your brand",
      title: "Learn More",
      content: `We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.`,
      layout: "text-image",
      image: { src: EggImg, alt: "egg-img" },
    },
    {
      heading: "Stand out to the right audience",
      title: "Learn More",
      content: `Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.`,
      layout: "image-text",
      image: { src: PinkCup, alt: "pink-cup" },
    },
    {
      heading: "Graphic Design",
      content: `Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.`,
      layout: "cherry",
    },
    {
      heading: "Photography",
      content: `Increase your credibility by getting the most stunning, high-quality photos that improve your business image.`,
      layout: "orange",
    },
  ],
};

export default function ContentComponent() {
  return (
    <div className="content-container">
      {contentData.cellBlocks.map((block, index) => {
        if (block.layout === "text-image" || block.layout === "image-text") {
          const text = (
            <div className="content-text">
              <div
                className={
                  block.layout === "text-image"
                    ? "content-text-container"
                    : "content-text-container-two"
                }
              >
                <h2>{block.heading}</h2>
                <p>{block.content}</p>
                {block.title && <h3>{block.title}</h3>}
              </div>
            </div>
          );

          const image = block.image && (
            <img
              className="content-img"
              src={block.image.src}
              alt={block.image.alt}
            />
          );

          return (
            <React.Fragment key={index}>
              {block.layout === "text-image" ? (
                <>
                  {text}
                  {image}
                </>
              ) : (
                <>
                  {image}
                  {text}
                </>
              )}
            </React.Fragment>
          );
        }

        // Cherry or Orange layouts
        return (
          <div
            key={index}
            className={
              block.layout === "cherry"
                ? "content-img-cherry"
                : "content-img-orange"
            }
          >
            <div
              className={
                block.layout === "cherry"
                  ? "content-img-cherry-text"
                  : "content-img-orange-text"
              }
            >
              <h2>{block.heading}</h2>
              <p>{block.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
