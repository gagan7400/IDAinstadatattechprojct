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
  const centerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "50px",
  };
  const centerStylee = {
    display: "flex",

    alignItems: "center",
    justifyContent: "space-around",
    width: "20%",
    marginTop: "30px",
    // textAlign:"center"
    marginLeft: "500px",
  };
  return (
    <div>
      <div className="ContainerAbout">
        {/* <strong style={centerStyle}>About</strong>
        <p style={centerStylee}>
          <FontAwesomeIcon icon={faHouse} /> Home
          <FontAwesomeIcon icon={faArrowRight} />
          About
        </p> */}

        <div className="d-flex p-lg-5">
          <div className="col-6"style={{paddingLeft:'5rem',paddingTop:'5rem'}}>
            <img style={{width:'450px',}} src="bg.jpg" />
          </div>
          <div className="col-6">
            <button className="btn-1"style={{fontFamily: "'Roboto', sans-serif",borderStyle:'none'}}>About Us</button>
            <br />
            <br />

            <strong style={{fontFamily: "'Roboto', sans-serif"}}>We Divide Our Working Process Into 4 Ways.</strong>

            <div className="sub-info">
              <p style={{fontFamily: "'Roboto', sans-serif"}}>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span style={{fontFamily: "'Roboto', sans-serif"}}> Planning</span>
                <br />
                Our planning phase is where visions take shape, goals become
                milestones, and ideas transform into actionable roadmaps,
                ensuring every project aligns with our clients' objectives.
              </p>
              <p style={{fontFamily: "'Roboto', sans-serif"}}>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span style={{fontFamily: "'Roboto', sans-serif"}}> Evaluate</span>
                <br />
                Our 'Evaluate' phase is where data-driven decisions take root,
                as we scrutinize existing systems and processes, paving the way
                for evidence-based solutions that make a real impact.
              </p>
              <p style={{fontFamily: "'Roboto', sans-serif"}}>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span style={{fontFamily: "'Roboto', sans-serif"}}> Execute</span>
                <br />
                In the 'Execute' phase, we bring plans to life with precision
                and expertise, harnessing the full power of our talented team to
                deliver innovative solutions.
              </p>
              <p style={{fontFamily: "'Roboto', sans-serif"}}>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span style={{fontFamily: "'Roboto', sans-serif"}}> Improve</span>
                <br />
                At Insta Data Tech, improvement is a continuous journey. Beyond
                project completion, we remain dedicated to refining and
                enhancing solutions to ensure sustained success.
              </p>
            </div>
            <button className="btn-1 " style={{fontFamily: "'Roboto', sans-serif",borderStyle:'none'}}>
              View More <FontAwesomeIcon icon={faArrowRight} />{" "}
            </button>
          </div>
        </div>


        {/* ------------------------ */}
      </div>

     <ChooseMe/>
    </div>
  );
};
export default About;
