import "./SixthPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
const Page6 = () => {
  return (
    <div className="page6-outer">
      <div className="page-inner">
        <div className="page6left">
          <h1>Fenisha</h1>
          <p>
            Comfort is our priority to satisfy our customers, and we provide all
            the furniture that you can easily and quickly access.
          </p>

          <span className="span">
            <p>
              {" "}
              2022
              <FontAwesomeIcon icon={faCopyright} /> Fenisha Productions
            </p>
          </span>
        </div>
        <div className="page6right">
          <h2
            style={{
              color: "white",
            }}
          >
            Sign up for our newsletter
          </h2>
          <div
            className="input"
            style={{
              borderBottom: "2px solid lightgray",
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                border: "0",
                outline: "none",
                backgroundColor: "black",
                color: "lightgray",
              }}
            />
            <button style={{ backgroundColor: "white", color: "black" }}>
              Submit
            </button>
          </div>
          <div className="table">
            <table style={{ borderSpacing: "25px", width: "500px" }}>
              <thead style={{ color: "white", fontSize: "1.2rem" }}>
                <tr>
                  <th>Menu</th>
                  <th>Help</th>
                  <th>Social</th>
                </tr>
              </thead>
              <tbody style={{ color: "lightGrey" }}>
                <tr>
                  <td>Home</td>
                  <td>Privacy and Policy</td>
                  <td>Facebook</td>
                </tr>
                <tr>
                  <td>Product</td>
                  <td>Terms of Use</td>
                  <td>Twitter</td>
                </tr>
                <tr>
                  <td>Store</td>
                  <td></td>
                  <td>Instagram</td>
                </tr>
                <tr>
                  <td>Contact</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page6;
