import FirstImg from "../assets/images/image-emily.jpg";
import SecondImg from "../assets/images/image-thomas.jpg";
import ThirdImg from "../assets/images/image-jennie.jpg";

import { Content } from "../types/types";

const testimonialsData: Content = {
  cellBlocks: [
    {
      heading: "Marketing Director",
      title: "Emily R.",
      content:
        "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit",
      image: { src: FirstImg, alt: "emily" },
      id: 0,
    },
    {
      heading: "Chief Operating Officer",
      title: "Thomas S.",
      content:
        "Sunnysside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
      image: { src: SecondImg, alt: "thomas" },
      id: 1,
    },
    {
      heading: "Business Owner",
      title: "Jennie F.",
      content:
        "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      image: { src: ThirdImg, alt: "jennie" },
      id: 2,
    },
  ],
};

function TestimonialCard({ block }: { block: typeof testimonialsData.cellBlocks[0] }) {
  return (
    <div className="testimonials-inner-container" key={block.id}>
      {block.image?.src && (
        <img
          className="testimonials-img"
          src={block.image.src}
          alt={block.image.alt || "testimonial"}
        />
      )}
      <div className="testimonials-mt">
        <p className="testimonials-padding">{block.content}</p>
        <div className="testimonials-mt">
          <span className="testimonials-names">{block.title}</span>
          <p className="testimonials-positions">{block.heading}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials({ subTitle }: { subTitle: string }) {
  return (
    <>
      <h3 className="testimonials-heading center">{subTitle}</h3>
      <div className="testimonials-container">
        {testimonialsData.cellBlocks.map((block) => (
          <TestimonialCard key={block.id} block={block} />
        ))}
      </div>
    </>
  );
}
