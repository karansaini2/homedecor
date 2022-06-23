import "./ThirdPage.css";

const Page3 = () => {
  return (
    <div className="page3-outer">
      <div className="page3-inner">
        <div className="leftside">
          <div className="pic1"></div>
          <div className="pic2"></div>
          <div className="pic3"></div>
        </div>
        <div className="rightside">
          <h2>Categories</h2>
          <h1>Our best </h1>
          <h1>recommendation</h1>
          <div className="contents">
            <div className="recommend">
              <h3>Living Room</h3>
              <span>
                <p>
                  Having a beautiful living room is everyone's dream,so we give
                  our recommendation for it.
                </p>
              </span>
            </div>
            <div className="recommend2">
              <h3>Private Workspace</h3>
            </div>
            <div className="recommend2">
              <h3>Gaming Room</h3>
            </div>
            <div className="recommend2">
              <h3>Patio</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
