import "./styles/About.css";
import { config } from "../config";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">{config.about.title}</h3>
        <p className="para" style={{ wordSpacing: 'normal', whiteSpace: 'normal', letterSpacing: '0px' }}>
          Driven Computer Science and Business Systems student with strong technical, analytical, and communication skills, certified in financial planning and data visualization. Effective communicator and quick learner with excellent team collaboration abilities and a keen interest in entrepreneurship and technology innovation. Looking for opportunities to apply technical knowledge and business acumen in a growth-oriented environment.
        </p>
      </div>
    </div>
  );
};

export default About;
