import React from 'react';

const Experience= () => {
  return (
    <section className="text-light py-80 " style={{ backgroundImage: "url(https://www.instadatatech.com/assets/presets/themesThree/images/experience-bg.png)" ,backgroundColor:'#1d2d4c',padding:"5rem"}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-heading text-center">
              <span className="btn btn--base outline mb-2 text-light" style={{fontFamily: "'Roboto', sans-serif",borderStyle:'none' ,background:' linear-gradient(90deg, rgba(81,85,251,1) 24%, rgba(25,209,253,1) 99%, rgba(220,187,247,1) 100%)'}}>Our Experience</span>
              <h2 className="fs-1" style={{fontFamily: "'Roboto', sans-serif"}}>
                A Proven 10-Year History Of Success In Web Development Technology
              </h2>
            </div>
          </div>
        </div>
        <div className=" d-flex justify-content-between flex-wrap mt-5 experience__"  >
          <div className="">
            <div className="experience">
              <div className="experience__icon">
                <h3>
                  <span className='btn btn-outline-info fs-1'>
                      90
                  </span>
                  <span className="letter fs-1" style={{fontFamily: "'Roboto', sans-serif"}}>+</span>
                </h3>
              </div>
              <div className="experience__content">
                <h3 className="title" style={{fontFamily: "'Roboto', sans-serif",marginLeft:'-8px'}}>Clients</h3>
              </div>
            </div>
          </div>
          <div className="">
            <div className="experience">
              <div className="experience__icon">
                <h3>
                  <span  className='btn btn-outline-info fs-1'>
                       400
                  </span>
                  <span className="letter fs-1" style={{fontFamily: "'Roboto', sans-serif"}}>+</span>
                </h3>
              </div>
              <div className="experience__content">
                <h3 className="title" style={{fontFamily: "'Roboto', sans-serif",marginLeft:'-13px'}}>Websites</h3>
              </div>
            </div>
          </div>
          <div className="">
            <div className="experience">
              <div className="">
                <h3>
                  <span  className='btn btn-outline-info fs-1'>
                    100
                  </span>
                  <span className="letter fs-1" style={{fontFamily: "'Roboto', sans-serif"}}>+</span>
                </h3>
              </div>
              <div className="experience__content">
                <h3 className="title" style={{fontFamily: "'Roboto', sans-serif",marginLeft:'-23px'}}>Application</h3>
              </div>
            </div>
          </div>
          <div className="">
            <div className="experience">
              <div className="experience__icon">
                <h3>
                  <span  className='btn btn-outline-info fs-1'>
                    10
                  </span>
                  <span className="letter fs-1" style={{fontFamily: "'Roboto', sans-serif"}}>+</span>
                </h3>
              </div>
              <div className="experience__content">
                <h3 className="title" style={{fontFamily: "'Roboto', sans-serif"}}>Products</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
