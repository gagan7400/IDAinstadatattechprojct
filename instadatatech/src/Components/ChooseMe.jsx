import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle,faCirclePause } from "@fortawesome/free-solid-svg-icons";

const ChooseMe = () => {
  return (
    <div>
      <div className="containerChooseMe d-flex p-lg-5">
        <div className="col-7">
          <div className="firstComponent ps-5 pt-5 pe-5">
            <button className="btn-1 ">Why Choose Me</button>
            <br />
            <br />
            <h1 className="fs-1" style={{fontFamily: "'Roboto', sans-serif"}}>Our Digital Agency Delivers Extraordinary Business Value.</h1>
           

            <span className="fs-5" style={{fontFamily: "'Roboto', sans-serif"}}>
              Data transfer capacity has generally been inconsistent dispersed
              around the world, with expanding focus in the advanced age.
              Generally just 10 nations have facilitated 70-75% of the worldwide
              telecom limit.
            </span>
          </div>
          
          <div style={{fontFamily: "'Roboto', sans-serif"}}>
            <div className="Chooseinfoo d-flex gap-2 ps-5">
              <div className="CircleICon fs-3 text-info">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <div className="fs-5">
                <p  className="fs-4" style={{fontWeight:'600', fontFamily: "'Roboto', sans-serif"}}>24/7 Helpdesk Availability</p>
                <span>
                  Revamp your business strategy with fresh thinking <br /> that
                  drives innovation.
                </span>
              </div>
            </div>
            <br />
            <div className="Chooseinfoo d-flex gap-2 ps-5">
              <div className="CircleICon fs-3 text-info">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <div className="fs-5 ">
                <p  className="fs-4" style={{fontWeight:'600', fontFamily: "'Roboto', sans-serif"}}>Risk-Free Satisfaction</p>
                <span style={{fontFamily: "'Roboto', sans-serif"}}>
                  Revamp your business strategy with fresh thinking <br /> that
                  drives innovation.
                </span>
              </div>
            </div>
            <br />
            <div className="Chooseinfoo d-flex gap-2 ps-5">
              <div className="CircleICon fs-3 text-info">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <div className="fs-5 ">
                <p  className="fs-4" style={{fontWeight:'600', fontFamily: "'Roboto', sans-serif"}}>Fresh Business Thinking</p>
                <span>
                  Revamp your business strategy with fresh thinking <br /> that
                  drives innovation.
                </span>
              </div>
            </div>
            <br />
          </div>
        </div>
        <div className="col-5" style={{paddingTop:'7rem'}}>
        <img className="rounded " width={'435em'} src="https://www.instadatatech.com/assets/images/frontend/theme_three_choose_us/64352b731796d1681206131.png" />
        </div>
     </div>
    </div>
  );
};

export default ChooseMe;