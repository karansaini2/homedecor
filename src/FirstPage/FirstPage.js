import Navbar from "../Navbar/Navbar";
import "./FirstPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
const Page1 = () => {
  return (
    <div className="page-start" id="page-start">
      <Navbar />

      <div className="page-inner">
        <div className="page-left">
          <h1>The best choice </h1>
          <h1>for your </h1>
          <h1>convenience</h1>

          <p id="p">Comfort is our priority to satisfy our customers,and we</p>
          <p>
            provide all the furniture that you can easily and quickly access.
          </p>
          <div className="buttons">
            {" "}
            <button className=" btn1">Get Started</button>
            <button className="btn2">
              <FontAwesomeIcon icon={faCirclePlay} /> Watch Video
            </button>
          </div>
          <div className="span">
            <span>
              200+ <p>Unique Style</p>
            </span>
            <span>
              300+
              <p>Project Finished</p>
            </span>
            <span>
              600+
              <p>Happy Customers</p>
            </span>
          </div>
        </div>
        <div className="page-right"></div>
      </div>
    </div>
  );
};

export default Page1;
