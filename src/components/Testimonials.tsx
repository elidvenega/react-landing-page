import FirstImg from "../assets/images/image-emily.jpg";
import SecondImg from "../assets/images/image-thomas.jpg";
import ThirdImg from "../assets/images/image-jennie.jpg";

export default function Testimonials({ subTitle }: { subTitle: string }) {
  return (
    <>
      <h3 className="testimonials-heading center">{subTitle}</h3>
      <div className="testimonials-container">
        <div className="testimonials-inner-container">
          <img className="testimonials-img" src={FirstImg} alt="emily" />
          <div className="testimonials-mt">
            <p>
              We put our trust in Sunnyside and they <br />
              delivered, making sure our needs were met <br />
              and deadlines were always hit
            </p>
            <div className="testimonials-mt">
              <span className="testimonials-names">Emily R.</span>
              <p className="testimonials-positions">Marketing Director</p>
            </div>
          </div>
        </div>
        <div className="testimonials-inner-container">
          <img className="testimonials-img" src={SecondImg} alt="thomas" />
          <div className="testimonials-mt">
            <p>
              Sunnyssides enthusiam coupled with thir <br />
              keen interest in our brand's success made it <br /> a satisfying
              and enjoyable experience.
            </p>
            <div className="testimonials-mt">
              <span className="testimonials-names">Thomas S.</span>
              <p className="testimonials-positions">Chief Operating Officer</p>
            </div>
          </div>
        </div>
        <div className="testimonials-inner-container">
          <img className="testimonials-img" src={ThirdImg} alt="jennie" />
          <div className="testimonials-mt">
            <p>
              Incredible end result! Our sales increased <br />
              over 400% when we worked with Sunnyside. <br />
              Highly recommended!
            </p>
            <div className="testimonials-mt">
              <span className="testimonials-names">Jennie F.</span>
              <p className="testimonials-positions">Business Owner</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
