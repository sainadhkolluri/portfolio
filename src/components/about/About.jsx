import "./about.css";
import Me from "../../img/me1.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Me}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        React.js Web Developer with a Flair for Photography.
        </p>
        <p className="a-desc">
            Proficient in building high-quality, interactive web applications
            using React.js, with a strong focus on performance optimization and
            clean code practices. Additionally skilled in the fundamentals of
            photography, including composition, lighting, and basic photo
            editing, with a passion for capturing moments and creating visually
            appealing images.
        </p>
      </div>
    </div>
  );
};

export default About;
