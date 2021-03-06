import React from "react";

import DayTime from "./forecast/DayTime";
import LocalWeather from "./LocalWeather";

const Sidebar = () => {
  return (
    <div>
      <div>
        <nav
          href="#navbar"
          className="js-colorlib-nav-toggle colorlib-nav-toggle"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <i />
        </nav>
        <aside id="colorlib-aside" className="border js-fullheight">
          <div className="text-center">
            <div
              className="author-img"
              style={{ backgroundImage: "url(images/me_thumbnail.jpg)" }}
            />
            <h1 id="colorlib-logo">
              <a href="index.html">Abinash (Avi) Khanal</a>
            </h1>
            <span className="email">
              <i className="icon-mail"></i> avinashkhanal@gmail.com
            </span>
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                <li className="active">
                  <a href="#home" data-nav-section="home">
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="about" data-nav-section="about">
                    About
                  </a>
                </li>
                <li>
                  <a href="n/a" data-nav-section="projects">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <nav id="colorlib-main-menu">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/abinashkhanal/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-linkedin2" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ak0501"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-github"></i>
                </a>
              </li>
            </ul>
          </nav>
          <div className="colorlib-footer">
            <p>
              {/* <small> */}
              <DayTime></DayTime>
             

              {/* <Forecast></Forecast> */}
              {/* </small> */}
              <div>
                <LocalWeather></LocalWeather>
              </div>
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};
export default Sidebar;
