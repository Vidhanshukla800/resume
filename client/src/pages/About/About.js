import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="/images/file.png"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>ABOUT ME</h1>
              <p>
              Welcome to my portfolio! I'm a versatile full stack developer with a passion for crafting robust and user-friendly web applications. With a blend of front-end and back-end expertise, I specialize in delivering end-to-end solutions that prioritize both functionality and aesthetics.Explore my portfolio to see examples of projects where I've applied my skills and expertise. I'm excited about the opportunity to contribute to innovative projects and collaborate on building transformative digital experiences.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
