import "./intro.css";
import Me from "../../img/me.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Sainadh Kolluri</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">React Developer</div>
              <div className="i-title-item">Photographer</div>
            </div>
          </div>
        </div> 
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
