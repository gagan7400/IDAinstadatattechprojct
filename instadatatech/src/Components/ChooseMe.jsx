import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle,faCirclePause } from "@fortawesome/free-solid-svg-icons";

const ChooseMe = () => {
  return (
    <div >
      <div className="containerChooseMe p-lg-5" style={{background: "rgb(249,249,249)",background: "linear-gradient(90deg, rgba(249,249,249,1) 24%, rgba(214,246,239,1) 70%, rgba(240,229,248,1) 100%)"}}>
        <div className="text_chooseMe" style={{paddingTop:'123px'}} >
          <div className="firstComponent">
          <a target="_blank" className=" btn btn--base outline mb-2 text-light" style={{ fontFamily: "'Roboto', sans-serif", borderStyle: 'none', background: ' linear-gradient(90deg, rgba(81,85,251,1) 24%, rgba(25,209,253,1) 99%, rgba(220,187,247,1) 100%)' }}>
            Why Choose Me<i class="bi bi-arrow-right-short"></i>
          </a>
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
            <div className="Chooseinfoo d-flex gap-2 ps-2">
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
            <div className="Chooseinfoo d-flex gap-2 ps-2">
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
            <div className="Chooseinfoo d-flex gap-2 ps-2">
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
        <div className="choose_img_pairent pb-5 " style={{paddingTop:'123px'}}>
        <img className="rounded choose_img"  src="https://www.instadatatech.com/assets/images/frontend/theme_three_choose_us/64352b731796d1681206131.png" />
        </div>
     </div>
    </div>
  );
};

export default ChooseMe;