import React from "react";
import Paragraph from "./Paragraph";
import Projects from "./Projects";
const About = () => {
  return (
    <div>
      <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <div
                className="row row-bottom-padded-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta"></span>
                    <h2 className="colorlib-heading">Little About Me</h2>
                    <Paragraph />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------- section -------------------------------- */}
       <section className="colorlib-about">
        {/* <div className="colorlib-narrow-content">
        </div> */}
         <Projects/>
      </section> 
    </div>
  );
};
export default About;
