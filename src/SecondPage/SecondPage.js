import "./SecondPage.css";

const Page2 = () => {
  return (
    <div className="page2-outer">
      <div className="page2-inner">
        <div className="upper">
          <h3>Feature</h3>
          <h1>what do we give you ?</h1>
        </div>
        <div className="content">
          <div className="one">
            <h2>- Free Shipping</h2>
            <span>
              <p>
                We really understand our customers,so we will provide free
                shipping costs to any loaction quickly,safely and without any
                damage to he product.
              </p>
            </span>
          </div>
          <div className="one">
            <h2>- Best Price</h2>
            <span>
              <p>
                We provide the best price for you compared to other places with
                the same quality as other stores. Also some good discounts and
                offers on a specified range.
              </p>
            </span>
          </div>
          <div className="one">
            <h2>- 7 years warranty</h2>
            <span>
              <p>
                We really believe in our products,so we provide a gurantee time
                of 7 years for you our customers.For pany problem we provide
                door to door service.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
