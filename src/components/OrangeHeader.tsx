import Arrow from "../assets/images/icon-arrow-down.svg";
export default function OrangeHeader() {
  const white_color: string = "#fff";
  return (
    <>
      <header className="header">
        <nav className="header-nav">
          <div className="header-logo">sunnyside</div>
          <ul>
            <li>
              <a href="#"> About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <button type="button" className="header-btn">
                CONTACT
              </button>
            </li>
          </ul>
        </nav>
        <h1
          style={{
            color: white_color,
            fontSize: "3rem",
            textAlign: "center",
            marginTop: "4rem",
            textTransform: "uppercase",
            letterSpacing: "0.3rem",
          }}
        >
          We are Creative
        </h1>
        <img
          style={{
            textAlign: "center",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            marginTop: "4rem",
          }}
          src={Arrow}
          alt="Arrow"
        />
      </header>
    </>
  );
}
