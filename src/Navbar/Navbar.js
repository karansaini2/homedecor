import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="container">
      <h2>Fenisha</h2>
      <div className="leftside">
        <ul className="inner-list">
          <li>
            <a href="#page-start" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="*">Product</a>
          </li>
          <li>
            <a href="*">Store</a>
          </li>
          <li>
            <a href="*">Contact</a>
          </li>
        </ul>
      </div>
      <div className="rightside">
        <button className="btn">Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
