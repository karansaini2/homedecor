import "./FourthPage.css";
import img5 from "../Images/5.jpg";
import img2 from "../Images/2.jpg";
import img7 from "../Images/7.jpg";
import img8 from "../Images/8.jpg";

const Page4 = () => {
  return (
    <div className="page4-outer">
      <div className="page4-inner">
        <h2>Our Product</h2>
        <h1>Magnificient product from us</h1>
        <div className="innerlist">
          <ul className="inner-list">
            <li>
              <a href="*" className="active">
                Popular
              </a>
            </li>
            <li>
              <a href="*">All Product</a>
            </li>
            <li>
              <a href="*">Table</a>
            </li>
            <li>
              <a href="*">Chair</a>
            </li>
            <li>
              <a href="*">Lamp</a>
            </li>
          </ul>
        </div>
        <div className="images">
          <div className="inner">
            <img src={img5} alt="" />
            <h2>Sofa Set</h2>
            <h3>$250</h3>
          </div>
          <div className="inner">
            {" "}
            <img src={img2} alt="" />
            <h2>Pool Furniture</h2>
            <h3>$120</h3>
          </div>
          <div className="inner">
            {" "}
            <img src={img7} alt="" />
            <h2>Dining Set</h2>
            <h3>$100</h3>
          </div>
          <div className="inner">
            <img src={img8} alt="" />
            <h2>Bed</h2>
            <h3>$150</h3>
          </div>
        </div>

        <div className="btn4">
          <button className="btn-show">Show More</button>
        </div>
      </div>
    </div>
  );
};

export default Page4;
