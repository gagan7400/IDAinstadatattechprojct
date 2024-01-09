import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay} from 'swiper/modules';

export default function Testimonials() {
    return (
        <div style={{paddingTop:"8rem"}}>
        <div className='Testimonials_section   flex-wrap position-relative'>
            <div className='Test_child1  position-relative'>
                <span className='outline mb-2 text-light p-2 rounded pe-4 ps-4' style={{ background: ' linear-gradient(90deg, rgba(81,85,251,1) 24%, rgba(25,209,253,1) 99%, rgba(220,187,247,1) 100%)' }}>Testimonials</span>
                <p className='fs-1 pt-4' style={{ fontWeight: '700', fontSize: '45px',fontFamily: "'Roboto', sans-serif" }}>What Clients Say About Us.</p>
                <span className='fs-5' style={{fontFamily: "'Roboto', sans-serif"}}>Data transfer capacity has generally been inconsistent dispersed around the world, with expanding focus in the advanced age just 10 nations have facilitated .
                </span>
                <div className='UP_ position-absolute'style={{zIndex:"-2",top:"0%",right:'2%',bottom:'-5%'}}>
                    <img width={"93px"}  style={{ top:"-14%",right:'2%' }} src="Testimonials_img.png" alt="" />
                </div>
            </div>
            <div className='Test_child2'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}


                    modules={[Autoplay]}
                    className="mySwiper"

                >
                    <SwiperSlide className='d-flex justify-content-center algin-content-center '>
                        <div className='shadow p-2  'style={{borderRadius: "3% 3% 3% 3%",backgroundColor:"#dcf6fd"}}>
                            <div className="testimonial-item position-relative d-flex gap-4  p-lg-4" style={{ borderRadius: "2% 2% 2% 2%" }}>



                                <div >
                                    <img style={{ borderRadius: "2% 2% 2% 2%" ,width:'150px',height:'200px'}} src="https://www.instadatatech.com/assets/images/frontend/testimonial/642279331b63b1679980851.png" alt="testimonial" />
                                </div>

                                <div>
                                    <div className=" d-flex">

                                        <div className="">
                                            <h5 className="text-dark" style={{fontFamily: "'Roboto', sans-serif"}}>
                                                Javicerillos
                                            </h5>
                                            <span className="testimonial-item__designation">
                                                CEO and Founder
                                            </span>
                                        </div>
                                    </div>
                                    <p className="testimonial-item__desc"style={{fontFamily: "'Roboto', sans-serif"}}>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur culpa magni, recusandae beatae provident nesciunt, quam corrupti rerum quod voluptatibus alias id!
                                    </p>


                                    <div className="">
                                        <div className="rating-list d-flex gap-2">
                                            <li className="rating-list__item"><i class="fas fa-star"></i></li>
                                            <li class="rating-list__item"><i class="fas fa-star"></i></li>
                                            <li class="rating-list__item"><i class="fas fa-star"></i></li>
                                            <li className="rating-list__item"><i class="fas fa-star"></i></li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='d-flex justify-content-center algin-content-center'>
                        <div className='shadow p-2 m-3'style={{borderRadius: "3% 3% 3% 3%",backgroundColor:"#dcf6fd"}}>
                            <div className="testimonial-item position-relative d-flex gap-4  p-lg-4   " style={{ borderRadius: "2% 2% 2% 2%" }}>



                                <div >
                                    <img style={{ borderRadius: "2% 2% 2% 2%" ,width:'150px',height:'200px'}} src="https://www.instadatatech.com/assets/images/frontend/testimonial/6422790db661d1679980813.png" alt="testimonial" />
                                </div>

                                <div>
                                    <div className=" d-flex">

                                        <div className="">
                                            <h5 className="testimonial-item__name"style={{fontFamily: "'Roboto', sans-serif"}}>
                                                Javicerillos
                                            </h5>
                                            <span className="testimonial-item__designation"style={{fontFamily: "'Roboto', sans-serif"}}>
                                                CEO and Founder
                                            </span>
                                        </div>
                                    </div>
                                    <p className="testimonial-item__desc"style={{fontFamily: "'Roboto', sans-serif"}}>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur culpa magni, recusandae beatae provident nesciunt, quam corrupti rerum quod voluptatibus alias id!
                                    </p>


                                    <div className="">
                                        <div className="rating-list d-flex gap-2">
                                            <li className="rating-list__item"><i class="fas fa-star"></i></li>
                                            <li class="rating-list__item"><i class="fas fa-star"></i></li>
                                            <li class="rating-list__item"><i class="fas fa-star"></i></li>
                                            <li className="rating-list__item"><i class="fas fa-star"></i></li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='d-flex justify-content-center algin-content-center '>
                        <div className='shadow p-2  'style={{borderRadius: "3% 3% 3% 3%",backgroundColor:"#dcf6fd"}}>
                            <div className="testimonial-item position-relative d-flex gap-4  p-lg-4" style={{ borderRadius: "2% 2% 2% 2%" }}>



                                <div >
                                    <img style={{ borderRadius: "2% 2% 2% 2%" ,width:'150px',height:'200px'}} src="https://www.instadatatech.com/assets/images/frontend/testimonial/642279331b63b1679980851.png" alt="testimonial" />
                                </div>

                                <div>
                                    <div className=" d-flex">

                                        <div className="">
                                            <h5 className="text-dark"style={{fontFamily: "'Roboto', sans-serif"}}>
                                                Javicerillos
                                            </h5>
                                            <span className="testimonial-item__designation"style={{fontFamily: "'Roboto', sans-serif"}}>
                                                CEO and Founder
                                            </span>
                                        </div>
                                    </div>
                                    <p className="testimonial-item__desc" style={{fontFamily: "'Roboto', sans-serif"}}>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur culpa magni, recusandae beatae provident nesciunt, quam corrupti rerum quod voluptatibus alias id!
                                    </p>


                                    <div className="">
                                        <div className="rating-list d-flex gap-2">
                                            <li className="rating-list__item"><i class="fas fa-star"></i></li>
                                            <li class="rating-list__item"><i class="fas fa-star"></i></li>
                                            <li class="rating-list__item"><i class="fas fa-star"></i></li>
                                            <li className="rating-list__item"><i class="fas fa-star"></i></li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='d-flex justify-content-center algin-content-center'>
                        <div className='shadow p-2 m-3'style={{borderRadius: "3% 3% 3% 3%",backgroundColor:"#dcf6fd"}}>
                            <div className="testimonial-item position-relative d-flex gap-4  p-lg-4   " style={{ borderRadius: "2% 2% 2% 2%" }}>



                                <div >
                                    <img style={{ borderRadius: "2% 2% 2% 2%" ,width:'150px',height:'200px'}} src="https://www.instadatatech.com/assets/images/frontend/testimonial/6422790db661d1679980813.png" alt="testimonial" />
                                </div>

                                <div>
                                    <div className=" d-flex">

                                        <div className="">
                                            <h5 className="testimonial-item__name" style={{fontFamily: "'Roboto', sans-serif"}}>
                                                Javicerillos
                                            </h5>
                                            <span className="testimonial-item__designation"style={{fontFamily: "'Roboto', sans-serif"}}>
                                                CEO and Founder
                                            </span>
                                        </div>
                                    </div>
                                    <p className="testimonial-item__desc"style={{fontFamily: "'Roboto', sans-serif"}}>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur culpa magni, recusandae beatae provident nesciunt, quam corrupti rerum quod voluptatibus alias id!
                                    </p>


                                    <div className="">
                                        <div className="rating-list d-flex gap-2">
                                            <li className="rating-list__item"><i class="fas fa-star"></i></li>
                                            <li class="rating-list__item"><i class="fas fa-star"></i></li>
                                            <li class="rating-list__item"><i class="fas fa-star"></i></li>
                                            <li className="rating-list__item"><i class="fas fa-star"></i></li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                   





                </Swiper>

            </div>
        </div>
        </div>
    )
}
