import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse, faArrowRight} from '@fortawesome/free-solid-svg-icons';
function Services() {
  const centerStyle  = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:"30px",
};
const centerStylee  = {
    display: 'flex',

    alignItems: 'center',
    justifyContent: 'space-around',
    width:"20%",marginTop:"30px",
    // textAlign:"center"
    marginLeft:"500px"
};
  return (
    <>Services
      <div>
        <strong style={centerStyle}>Services</strong>
        <p style={centerStylee}>
          <FontAwesomeIcon icon={faHouse} /> Home
          <FontAwesomeIcon icon={faArrowRight} /> Services
        </p>
      </div>


      <div className='Service-space'>

        <div className="container-Service">
          <div className="row1">
            <div className="card card-1">
              <div className="service__icon">
                <i className="fa fa-users" aria-hidden="true"></i>
              </div>
              <h3>Digital Marketing</h3>
              <p>Drive online success with our digital marketing expertise. We create data-driven campaigns that boost your online visibility, engage your ta...</p>
              <div className="btns">
                <div className="sections slides">
                  <div className="btn-Service slide Slide-right">View<i className="fas fa-arrow-right" style={{ marginLeft: "5px" }}></i></div>
                </div>
              </div>
            </div>

            <div className="card card-1">
              <div className="service__icon">
                <i className="fa fa-cloud-upload" aria-hidden="true"></i>
              </div>
              <h3>Cloud Services</h3>
              <p>Harness the full potential of the cloud with our comprehensive services. We offer scalable, secure, and cost-effective cloud solutions tailo...</p>
              <div className="btns">
                <div className="sections slides">
                  <div className="btn slide Slide-right">View<i className="fas fa-arrow-right" style={{ marginLeft: "5px" }}></i></div>
                </div>
              </div>
            </div>

            <div className="card card-1">
              <div className="service__icon">
                <i className="fa fa-mobile" aria-hidden="true"></i>
              </div>
              <h3>Application Development</h3>
              <p>We specialize in creating cutting-edge applications that meet your unique business needs. Our expert development team designs and builds use...</p>
              <div className="btns">
                <div className="sections slides">
                  <div className="btn slide Slide-right">View<i className="fas fa-arrow-right" style={{ marginLeft: "5px" }}></i></div>
                </div>
              </div>
            </div>
          </div>


           
          <div className="row2">
            <div className="card card-1">
              <div className="service__icon">
                <i className="fas fa-atlas"></i>
              </div>
              <h3>Website Development</h3>
              <p>Our website development services are your gateway to a powerful online presence. We craft custom websites that not only look stunning but al...</p>
              <div className="btns">
                <div className="sections slides">
                  <div className="btn slide Slide-right">View<i className="fas fa-arrow-right" style={{ marginLeft: "5px" }}></i></div>
                </div>
              </div>
            </div>

            <div className="card card-1">
              <div className="service__icon">
                <i className="fas fa-chart-pie"></i>
              </div>
              <h3>Data Analytics</h3>
              <p>Our data analytics services offer actionable insights from your data, driving informed decision-making and business success. Our expert team...</p>
              <div className="btns">
                <div className="sections slides">
                  <div className="btn slide Slide-right">View<i className="fas fa-arrow-right" style={{ marginLeft: "5px" }}></i></div>
                </div>
              </div>
            </div>

            <div className="card card-1">
              <div className="service__icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Data Science</h3>
              <p>Harness the power of data with our cutting-edge data science services. We turn raw data into actionable insights, helping you make informed ...</p>
              <div className="btns">
                <div className="sections slides">
                  <div className="btn slide Slide-right">View<i className="fas fa-arrow-right" style={{ marginLeft: "5px" }}></i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services