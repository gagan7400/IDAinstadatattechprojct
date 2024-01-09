import React,{useEffect} from 'react'
function Services() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);
  return (
    <>
      <div className='d-flex flex-wrap p-lg-5 justify-content-center row-gap-4 gap-4'>
          <div className="card2">
            <div className="service__icon">
              <i className="fa fa-users" aria-hidden="true"></i>
            </div>
            <h3>Digital Marketing</h3>
            <p>Drive online success with our digital marketing expertise. We create data-driven campaigns that boost your online visibility, engage your ta...</p>
            <div className="btns">
              <div className="pt-4 ps-3">
                <div className="btn btn-outline-info"  >View<i className="fas fa-arrow-right"></i></div>
              </div>
            </div>
          </div>
          <div className="card2">
            <div className="service__icon">
              <i className="fa fa-cloud-upload" aria-hidden="true"></i>
            </div>
            <h3>Cloud Services</h3>
            <p>Harness the full potential of the cloud with our comprehensive services. We offer scalable, secure, and cost-effective cloud solutions tailo...</p>
            <div className="btns">
            <div className="pt-4 ps-3">
                <div className="btn btn-outline-info"  >View<i className="fas fa-arrow-right"></i></div>
              </div>
            </div>
          </div>

          <div className="card2">
            <div className="service__icon">
              <i className="fa fa-mobile" aria-hidden="true"></i>
            </div>
            <h3>Application Development</h3>
            <p>We specialize in creating cutting-edge applications that meet your unique business needs. Our expert development team designs and builds use...</p>
            <div className="btns">
            <div className="pt-4 ps-3">
                <div className="btn btn-outline-info"  >View<i className="fas fa-arrow-right"></i></div>
              </div>
            </div>
          </div>

          <div className="card2 card-1">
            <div className="service__icon">
              <i className="fas fa-atlas"></i>
            </div>
            <h3>Website Development</h3>
            <p>Our website development services are your gateway to a powerful online presence. We craft custom websites that not only look stunning but al...</p>
            <div className="btns">
            <div className="pt-4 ps-3">
                <div className="btn btn-outline-info" >View<i className="fas fa-arrow-right"></i></div>
              </div>
            </div>
          </div>

          <div className="card2 card-1">
            <div className="service__icon">
              <i className="fas fa-chart-pie"></i>
            </div>
            <h3>Data Analytics</h3>
            <p>Our data analytics services offer actionable insights from your data, driving informed decision-making and business success. Our expert team...</p>
            <div className="btns">
            <div className="pt-4 ps-3">
                <div className="btn btn-outline-info" >View<i className="fas fa-arrow-right"></i></div>
              </div>
            </div>
          </div>

          <div className="card2 card-1">
            <div className="service__icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Data Science</h3>
            <p>Harness the power of data with our cutting-edge data science services. We turn raw data into actionable insights, helping you make informed ...</p>
            <div className="btns">
            <div className="pt-4 ps-3">
                <div className="btn btn-outline-info" >View<i className="fas fa-arrow-right"></i></div>
              </div>
            </div>
          </div>

        </div>
     
    </>
  )
}

export default Services;