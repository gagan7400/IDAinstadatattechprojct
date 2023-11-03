import React from 'react';
import Blog from './blog/Blog';
import Services from './Services';
import Contact from './Contact';
import About from './About';

 

export default function Home() {
  const background = {
    height:"100vh",
    background: 'rgb(248, 249, 249)',
    background: 'linear-gradient(120deg, rgba(248, 249, 249, 1) 0%, rgba(172, 235, 251, 1) 19%, rgba(255, 255, 255, 1) 69%,rgba(172, 235, 251, 1) 69%,#c785fd 100%)',
  };
  const background1 = {
    borderRadius: '15px 80px',
    background:' rgb(173,168,252)',
    background: 'linear-gradient(-120deg,rgba(135,227,253,1) 0%, rgba(173,168,252,1) 100%)',
    
  }
  return (
    <>
    <div classNameName='' style={{...background }}>
      <div style={{paddingTop:'100px'}}>
      <div className=" gy-4 d-flex align-items-center p-lg-5" >
        <div className="col-lg-6 p-lg-5 ">
          <div className="banner-left__content">
            <span className=" p-2 rounded text-light "style={{fontWeight:'700',letterSpacing:'2px',background:' linear-gradient(90deg, rgba(81,85,251,1) 24%, rgba(25,209,253,1) 70%, rgba(220,187,247,1) 100%)'}}>Analytics, Development, Precision, Growth</span>
            <h2 className='text-uppercase mt-4 mb-4'style={{fontWeight:'700',fontSize:'45px'}}>Innovate, Analyze, Develop: We Do It All</h2>
            <p>Insta Data Tech bridges data and innovation, delivering tailored solutions. Our expertise spans data analytics, science, web, and app development, driving growth for clients. We're your partners in digital transformation, empowering you with actionable insights. Elevate your future with Insta Data Tech, where data meets excellence and innovation.</p>
            <a target="_blank" className="btn btn--base me-2 mb-2 text-light" style={{background:' linear-gradient(90deg, rgba(81,85,251,1) 24%, rgba(25,209,253,1) 99%, rgba(220,187,247,1) 100%)'}} >
              Get Started  <i className="fa-sharp fas fa-arrow-right"></i>
            </a>
            <a target="_blank" className="btn btn--base outline mb-2 text-light" style={{background:' linear-gradient(90deg, rgba(81,85,251,1) 24%, rgba(25,209,253,1) 99%, rgba(220,187,247,1) 100%)'}}>
              Contact Us <i className="far fa-id-card"></i>
            </a>
          </div>
        </div>
       
        <div className="col-lg-5">
        <div className="ps-5 pb-4 mt-4 pt-4 position-relative" style={background1} >
          <div className="banner-right-wrap" style={{width:'460px'}}>

            <div className="rounded p-2 bg-primary position-absolute UP_" style={{top:'-17%',left:'56%', border: "5px solid light" }}>
              <h4 className='fs-1 text-light text-center'style={{fontWeight:'900'}}>3</h4>
              <span className='text-light' style={{fontSize:'11px',fontWeight:'900'}}>Years Of Experience</span>
            </div>
            <img width={"90%"} className=''  src="https://www.instadatatech.com/assets/images/frontend/theme_three_banner/6435294576fd51681205573.png" alt="Banner Image" />
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
    <Blog/>
    <About/>
    <Services/> 
    <Contact/>
    
    </>
  );
}
