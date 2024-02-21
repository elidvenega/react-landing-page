import FirstImg from "../assets/images/image-emily.jpg";
import SecondImg from "../assets/images/image-thomas.jpg";
import ThirdImg from "../assets/images/image-jennie.jpg";

import { Content } from "./Data.tsx";

const testimonialsData: Content = {
  cellBlocks: [
    {
      heading: `Marketing Director`,
      title: `Emily R.`,
      content: `We put our trust in Sunnyside and they 
      delivered, making sure our needs were met 
      and deadlines were always hit`,
    },
    {
      heading: `Chief Operating Officer`,
      title: `Thomas S.`,
      content: `
      Sunnyssides enthusiam coupled with their 
      keen interest in our brand's success made it a satisfying
      and enjoyable experience.
      `,
    },
    {
      heading: `Business Owner`,
      title: `Jennie F.`,
      content: `
      Incredible end result! Our sales increased
      over 400% when we worked with Sunnyside. 
      Highly recommended!
      `,
    },
   
  ],
};

export default function Testimonials({ subTitle }: { subTitle: string }) {
  return (
    <>
      <h3 className="testimonials-heading center">{subTitle}</h3>
      <div className="testimonials-container">
        <div className="testimonials-inner-container">
          <img className="testimonials-img" src={FirstImg} alt="emily" />
          <div className="testimonials-mt">
            <p className="testimonials-padding">{testimonialsData.cellBlocks[0].content}</p>
            <div className="testimonials-mt">
              <span className="testimonials-names">
                {testimonialsData.cellBlocks[0].title}
              </span>
              <p className="testimonials-positions">
                {testimonialsData.cellBlocks[0].heading}
              </p>
            </div>
          </div>
        </div>
        <div className="testimonials-inner-container">
          <img className="testimonials-img" src={SecondImg} alt="thomas" />
          <div className="testimonials-mt">
            <p className="testimonials-padding">
            {testimonialsData.cellBlocks[1].content}
            </p>
            <div className="testimonials-mt">
              <span className="testimonials-names"> {testimonialsData.cellBlocks[1].title}</span>
              <p className="testimonials-positions"> {testimonialsData.cellBlocks[1].heading}</p>
            </div>
          </div>
        </div>
        <div className="testimonials-inner-container">
          <img className="testimonials-img" src={ThirdImg} alt="jennie" />
          <div className="testimonials-mt">
            <p className="testimonials-padding">
            {testimonialsData.cellBlocks[2].content}
            </p>
            <div className="testimonials-mt">
              <span className="testimonials-names">{testimonialsData.cellBlocks[2].title}</span>
              <p className="testimonials-positions">{testimonialsData.cellBlocks[2].heading}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
