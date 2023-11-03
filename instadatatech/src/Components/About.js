import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHouse,
  faArrowRight,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

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
        <strong style={centerStyle}>About</strong>
        <p style={centerStylee}>
          <FontAwesomeIcon icon={faHouse} /> Home
          <FontAwesomeIcon icon={faArrowRight} />
          About
        </p>

        <div className="information">
          <div>
            <img src="bg.jpg" />
          </div>
          <div>
            <button className="btn-1">About Us</button>
            <br />
            <br />

            <strong>We Divide Our Working Process Into 4 Ways.</strong>

            <div className="sub-info">
              <p>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span> Planning</span>
                <br />
                Our planning phase is where visions take shape, goals become
                milestones, and ideas transform into actionable roadmaps,
                ensuring every project aligns with our clients' objectives.
              </p>
              <p>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span> Evaluate</span>
                <br />
                Our 'Evaluate' phase is where data-driven decisions take root,
                as we scrutinize existing systems and processes, paving the way
                for evidence-based solutions that make a real impact.
              </p>
              <p>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span> Execute</span>
                <br />
                In the 'Execute' phase, we bring plans to life with precision
                and expertise, harnessing the full power of our talented team to
                deliver innovative solutions.
              </p>
              <p>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span> Improve</span>
                <br />
                At Insta Data Tech, improvement is a continuous journey. Beyond
                project completion, we remain dedicated to refining and
                enhancing solutions to ensure sustained success.
              </p>
            </div>
            <button className="btn-1 ">
              View More <FontAwesomeIcon icon={faArrowRight} />{" "}
            </button>
          </div>
        </div>
        {/* ------------------------ */}

        <div className="secondcontainer">
          <div className="upper-box">
            <button className="btn-1">FAQ</button>

            <p>Frequently Asked Question.</p>

            <span>
              Data transfer capacity has generally been inconsistent dispersed
              around the world, with expanding <br /> focus in the advanced age
              just 10 nations have facilitated .
            </span>
          </div>

          <div className="secondsubcontainer">
            <img src="kalu.jpg" />
            <div className="questions">
              <div className="firstdiv">
                <div className="firstt">
                  <p>
                    1. What kind of industries do you work with? <span>-</span>
                  </p>
                </div>
                <hr />
                <span>
                  Yes, we offer custom software development services tailored to
                  the specific needs of our clients. We work closely with our
                  clients to understand their requirements and develop solutions
                  that meet their unique needs.
                </span>
              </div>
              <div className="seconddiv">
                {" "}
                2. How much does it cost to develop software? <span>+</span>
              </div>
              <div className="thirddiv">
                3. How long does it take to develop software? <span>+</span>
              </div>
              <div className="fourthdiv">
                4. Custom software development services ? <span>+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Thirdcontainer">
        <div className="Container ">
        <div className="cone">
        <button className="btn-1">News Letter</button>
           <br/>
          <br/>
          <p>Subscribe Our Newsletter</p>
          <br/>
          <br/>
          <span>
            Data transfer capacity has generally been inconsistent dispersed
            around  
            <br/>the world, with expanding focus in the advanced age just.
          </span>
          <br/>
          <br/>
          
          <input type="text" placeholder="Enter your mail" className="input"/>
        </div>
        </div>
      </div>
    </div>
  );
};
export default About;
