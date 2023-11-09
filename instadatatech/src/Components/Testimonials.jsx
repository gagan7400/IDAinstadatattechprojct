import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Testimonials() {
    return (
        <div style={{paddingTop:"8rem"}}>
        <div className='d-flex p-lg-5 flex-wrap position-relative'>
            <div className='col-6 ps-5 position-relative'>
                <span className='outline mb-2 text-light p-2 rounded pe-4 ps-4' style={{ background: ' linear-gradient(90deg, rgba(81,85,251,1) 24%, rgba(25,209,253,1) 99%, rgba(220,187,247,1) 100%)' }}>Testimonials</span>
                <p className='fs-1 pt-4' style={{ fontWeight: '700', fontSize: '45px' }}>What Clients Say About Us.</p>
                <span className='fs-5' >Data transfer capacity has generally been inconsistent dispersed around the world, with expanding focus in the advanced age just 10 nations have facilitated .
                </span>
                <div className=''>
                    <img width={"93px"} className='position-absolute z-3' style={{ top:"-14%",right:'2%' }} src="Testimonials_img.png" alt="" />
                </div>
            </div>
        </div> 
        </div>
    )
}
