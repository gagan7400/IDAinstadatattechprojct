import React from 'react';
import Blog from './blog/Blog';

import Products from './Products';
import About from './About';
import Swiper_footer from './Swiper_footer';
import Testimonials from './Testimonials';
import Experience from './Experience';
import FAQ_about from './FAQ_about';
import News_letter from './News_letter';
import Blog_home from './Blog_home';
import { NavLink } from 'react-router-dom';




export default function Home() {
  const background = {
    
    background: 'rgb(248, 249, 249)',
    background: 'linear-gradient(120deg, rgba(248, 249, 249, 1) 0%, rgba(172, 235, 251, 1) 19%, rgba(255, 255, 255, 1) 69%,rgba(172, 235, 251, 1) 69%,#c785fd 100%)',
  };
  const background1 = {
    borderRadius: '15px 80px',
    background: ' rgb(173,168,252)',
    background: 'linear-gradient(-120deg,rgba(135,227,253,1) 0%, rgba(173,168,252,1) 100%)',
    
  }
  return (
    <>
      <div className='Home_bg' style={{ ...background }}>
        <div style={{ paddingTop: '4rem' }}>
          <div className="home_section gy-4  align-items-center p-lg-5">
            <div className="col-lg-6 p-lg-5 ">
              <div className="banner-left__content">
                <span className=" p-2 rounded text-light" style={{ fontWeight: '700', letterSpacing: '0.1rem', fontFamily: "'Roboto', sans-serif", background: ' linear-gradient(90deg, rgba(81,85,251,1) 24%, rgba(25,209,253,1) 70%, rgba(220,187,247,1) 100%)', width: '100%', fontSize: "0.8rem" }}>Analytics, Development, Precision, Growth</span>
                <h2 className='text-uppercase mt-4 mb-4 Font_title' style={{ fontWeight: '700',  fontFamily: "'Roboto', sans-serif" }}>Innovate, Analyze, Develop: We Do It All</h2>
                <p style={{ fontFamily: "'Roboto', sans-serif" }}>Insta Data Tech bridges data and innovation, delivering tailored solutions. Our expertise spans data analytics, science, web, and app development, driving growth for clients. We're your partners in digital transformation, empowering you with actionable insights. Elevate your future with Insta Data Tech, where data meets excellence and innovation.</p>
                <NavLink to='./services' className="btn btn--base me-2 mb-2 text-light" style={{ fontFamily: "'Roboto', sans-serif", borderStyle: 'none', background: ' linear-gradient(90deg, rgba(81,85,251,1) 24%, rgba(25,209,253,1) 99%, rgba(220,187,247,1) 100%)' }} >
                  Get Started  <i className="fa-sharp fas fa-arrow-right"></i>
                </NavLink>
                <NavLink to='/contact'  className="btn btn--base outline mb-2 text-light" style={{ fontFamily: "'Roboto', sans-serif", borderStyle: 'none', background: ' linear-gradient(90deg, rgba(81,85,251,1) 24%, rgba(25,209,253,1) 99%, rgba(220,187,247,1) 100%)' }}>
                  Contact Us <i className="far fa-id-card"></i>
                </NavLink>
              </div>
            </div>

            <div className="col-lg-5 Home_second">
              <div className="Home_se ps-5 pb-4  pt-4 position-relative" style={background1} >
                <div className="">

                  <div className="rounded p-2 position-absolute UP_" style={{ top: '-17%', left: '56%', border: "5px solid light", background: ' linear-gradient(90deg, rgba(81,85,251,1) 24%, rgba(25,209,253,1) 99%, rgba(220,187,247,1) 100%)', border: "4px solid rgb(79, 241, 244)" }}>
                    <h4 className='fs-1 text-light text-center' style={{ fontWeight: '900', fontFamily: "'Roboto', sans-serif" }}>3</h4>
                    <span className='text-light' style={{ fontSize: '11px', fontWeight: '900', fontFamily: "'Roboto', sans-serif" }}>Years Of Experience</span>
                  </div>
                  <img width={"90%"} className='' src="https://www.instadatatech.com/assets/images/frontend/theme_three_banner/6435294576fd51681205573.png" alt="Banner Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />

      <Experience />
      <Products />
      <News_letter />
      <Testimonials />
      <FAQ_about />
      <Blog_home />
      <Blog />
      <Swiper_footer />

    </>
  );
}
