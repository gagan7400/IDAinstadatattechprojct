import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay} from 'swiper/modules';

export default function Swiper_footer() {
    return (
        <div className='w-100' style={{paddingTop:"4rem",paddingBottom:"4rem"}}>
                <Swiper
                      slidesPerView={6}
                      spaceBetween={20}
                      autoplay={{
                          delay: 2000,
                          disableOnInteraction: false,
                      }}
                      pagination={{
                          clickable: true,
                      }}
                      modules={[Autoplay]}
                      className="mySwiper"
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        320: {
                          slidesPerView: 2,
                        },
                        800: {
                          slidesPerView: 4,
                        },
                        1150: {
                          slidesPerView: 6,
                        },
                      }}

                >
                    <SwiperSlide  className='d-flex justify-content-center algin-content-center'>
                       
                        <img  className='border-light   shadow m-3  p-2' src="https://www.instadatatech.com/assets/images/frontend/brand/6422b40d1aa2f1679995917.png" alt="" />
                        
                    </SwiperSlide>
                    <SwiperSlide className='d-flex justify-content-center algin-content-center '>
                       <img  className='border-light   shadow m-3  p-2' src="https://www.instadatatech.com/assets/images/frontend/brand/6422b4073bea91679995911.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='d-flex justify-content-center algin-content-center'>
                       <img  className='border-light   shadow m-3  p-2' src="https://www.instadatatech.com/assets/images/frontend/brand/6422b4073bea91679995911.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='d-flex justify-content-center algin-content-center'>
                        <img  className='border-light   shadow m-3  p-2' src="https://www.instadatatech.com/assets/images/frontend/brand/6422b412bef981679995922.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='d-flex justify-content-center algin-content-center'>
                        <img  className='border-light   shadow m-3  p-2' src="https://www.instadatatech.com/assets/images/frontend/brand/6422b42528ada1679995941.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='d-flex justify-content-center algin-content-center'>
                        <img  className='border-light   shadow m-3  p-2' src="https://www.instadatatech.com/assets/images/frontend/brand/6422b40140bc21679995905.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='d-flex justify-content-center algin-content-center'>
                        <img  className='border-light   shadow m-3  p-2' src="https://www.instadatatech.com/assets/images/frontend/brand/6422b40d1aa2f1679995917.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='d-flex justify-content-center algin-content-center '>
                       <img  className='border-light   shadow m-3  p-2' src="https://www.instadatatech.com/assets/images/frontend/brand/6422b40d1aa2f1679995917.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='d-flex justify-content-center algin-content-center'>
                       <img  className='border-light   shadow m-3  p-2' src="https://www.instadatatech.com/assets/images/frontend/brand/6422b4073bea91679995911.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='d-flex justify-content-center algin-content-center '>
                       <img  className='border-light   shadow m-3  p-2' src="https://www.instadatatech.com/assets/images/frontend/brand/6422b4073bea91679995911.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='d-flex justify-content-center algin-content-center'>
                        <img  className='border-light   shadow m-3  p-2' src="https://www.instadatatech.com/assets/images/frontend/brand/6422b412bef981679995922.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='d-flex justify-content-center algin-content-center'>
                        <img  className='border-light   shadow m-3  p-2' src="https://www.instadatatech.com/assets/images/frontend/brand/6422b42528ada1679995941.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='d-flex justify-content-center algin-content-center'>
                        <img  className='border-light   shadow m-3  p-2' src="https://www.instadatatech.com/assets/images/frontend/brand/6422b40140bc21679995905.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='d-flex justify-content-center algin-content-center'>
                        <img  className='border-light   shadow m-3  p-2' src="https://www.instadatatech.com/assets/images/frontend/brand/6422b40d1aa2f1679995917.png" alt="" />
                    </SwiperSlide>
                </Swiper>

           
        </div>
        
    )
}
