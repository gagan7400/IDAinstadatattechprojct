import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHouse,
  faArrowRight,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import ChooseMe from "./ChooseMe";

const About = () => {

  return (
    <div>
      <div className="mb-5 pb-5 mt-5 pt-lg-5">
        <div className="About text-center">
          <a target="_blank" className=" btn btn--base outline mb-2 text-light" style={{ fontFamily: "'Roboto', sans-serif", borderStyle: 'none', background: ' linear-gradient(90deg, rgba(81,85,251,1) 24%, rgba(25,209,253,1) 99%, rgba(220,187,247,1) 100%)' }}>
            About Us
          </a>
        </div>

        <div className="about_section">
          <div className="m-auto about_img_pairent">
            <img className="About_img" src="bg.jpg" />
          </div>
          <div className="m-auto about_text">
            <div >
             
              <br />
              <strong style={{ fontFamily: "'Roboto', sans-serif" }}>We Divide Our Working Process Into 4 Ways.</strong>

            </div>

            <div className="sub-info">
              <p style={{ fontFamily: "'Roboto', sans-serif" }}>
                <i class="bi bi-check-circle-fill text-info"></i>
                <span style={{ fontFamily: "'Roboto', sans-serif" }}> Planning</span>
                <br />
                Our planning phase is where visions take shape, goals become
                milestones, and ideas transform into actionable roadmaps,
                ensuring every project aligns with our clients' objectives.
              </p>
              <p style={{ fontFamily: "'Roboto', sans-serif" }}>
                <i class="bi bi-check-circle-fill text-info"></i>
                <span style={{ fontFamily: "'Roboto', sans-serif" }}> Evaluate</span>
                <br />
                Our 'Evaluate' phase is where data-driven decisions take root,
                as we scrutinize existing systems and processes, paving the way
                for evidence-based solutions that make a real impact.
              </p>
              <p style={{ fontFamily: "'Roboto', sans-serif" }}>
              <i class="bi bi-check-circle-fill text-info"></i>
                <span style={{ fontFamily: "'Roboto', sans-serif" }}> Execute</span>
                <br />
                In the 'Execute' phase, we bring plans to life with precision
                and expertise, harnessing the full power of our talented team to
                deliver innovative solutions.
              </p>
              <p style={{ fontFamily: "'Roboto', sans-serif" }}>
              <i class="bi bi-check-circle-fill text-info"></i>
                <span style={{ fontFamily: "'Roboto', sans-serif" }}> Improve</span>
                <br />
                At Insta Data Tech, improvement is a continuous journey. Beyond
                project completion, we remain dedicated to refining and
                enhancing solutions to ensure sustained success.
              </p>
            </div>
            
            <a target="_blank" className=" btn btn--base outline mb-2 text-light" style={{ fontFamily: "'Roboto', sans-serif", borderStyle: 'none', background: ' linear-gradient(90deg, rgba(81,85,251,1) 24%, rgba(25,209,253,1) 99%, rgba(220,187,247,1) 100%)' }}>
            View More <i class="bi bi-arrow-right-short"></i>
          </a>
          </div>
        </div>


        {/* ------------------------ */}
      </div>

      <ChooseMe />
    </div>
  );
};
export default About;
