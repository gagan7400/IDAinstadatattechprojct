import React from 'react'

export default function Footer() {
    return (<>
        <div className='bg-dark text-light pt-lg-5 pb-lg-5'>
            <div className="pb-60 pt-80 pt-lg-5">
                <div className="container">
                    <div className="row justify-content-center gy-5">
                        <div className="col-xl-3 col-sm-6">
                            <div >
                                <div className="pb-4">
                                    <a className=""> <img width={'200px'} src="https://www.instadatatech.com/assets/images/general/logo_white.png" alt="Laravel" /></a>
                                </div>
                                <p className=" mb-3" style={{fontFamily: "'Roboto', sans-serif"}}>Let's make something great together. We are trusted by over 5000+ clients. Join them by using our services and grow your business.</p>

                                <div className=" w-50 position-relative d-flex border-0">
                                    <div className='position-absolute' >
                                        <input type="text" name="email" className="fs-4  position-relative border-0 rounded" placeholder="   Email" id="email" style={{ backgroundColor: "#1f2a36" }} />
                                    </div>
                                    <button type="submit" className="btn btn-outline-light position-relative " style={{ marginLeft: "11.7rem", marginTop: '0.03rem' }}>Subscribe</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-sm-6">
                            <div className="footer-item">
                                <h5 className=""style={{fontFamily: "'Roboto', sans-serif"}}>Userful Link</h5>

                                <li className="pb-2 ps-1 list-group-item"><a href="" className=" text-decoration-none text-light"style={{fontFamily: "'Roboto', sans-serif"}}>Home</a></li>
                                <li className="pb-2 ps-1 list-group-item"><a href="" className=" text-decoration-none text-light"style={{fontFamily: "'Roboto', sans-serif"}}>About</a></li>
                                <li className="pb-2 ps-1 list-group-item"><a href="" className=" text-decoration-none text-light"style={{fontFamily: "'Roboto', sans-serif"}}>Cookie Policy</a></li>
                                <li className="pb-2 ps-1 list-group-item"><a href="" className=" text-decoration-none text-light"style={{fontFamily: "'Roboto', sans-serif"}}>Privacy Policy</a></li>
                                <li className="pb-2 ps-1 list-group-item"><a href="" className=" text-decoration-none text-light"style={{fontFamily: "'Roboto', sans-serif"}}>Terms of Service</a></li>

                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="footer-item">
                                <h5 style={{fontFamily: "'Roboto', sans-serif"}}>Latest Feed</h5>
                                <div className="">
                                    <div className="d-flex pt-4">

                                        <img width={"100px"} className='rounded' src="https://www.instadatatech.com/assets/images/frontend/blog/thumb_6422b254567971679995476.jpg" alt="blog-img" />

                                        <div className=" ps-3">
                                            <h6 className=""style={{fontFamily: "'Roboto', sans-serif"}}>
                                                Photoshop Create Path From Image.
                                            </h6>
                                            <span className=""style={{fontFamily: "'Roboto', sans-serif"}}>Mar 2023, 11:52 PM</span>
                                        </div>
                                    </div>
                                    <div className="d-flex pt-4">

                                        <img width={"100px"} className='rounded' src="https://www.instadatatech.com/assets/images/frontend/blog/thumb_6423d54ec0f671680069966.jpg" alt="blog-img" />

                                        <div className="ps-3">
                                            <h6 className=""style={{fontFamily: "'Roboto', sans-serif"}}>
                                                Color match perfectly to impress your customers
                                            </h6>
                                            <span className=""style={{fontFamily: "'Roboto', sans-serif"}}>Mar 2023, 01:45 AM</span>
                                        </div>
                                    </div>
                                    <div className="d-flex pt-4">

                                        <img width={"100px"} className='rounded' src="https://www.instadatatech.com/assets/images/frontend/blog/thumb_6422b22586f7a1679995429.jpg" alt="blog-img" />

                                        <div className="ps-3">
                                            <h6 className=""style={{fontFamily: "'Roboto', sans-serif"}}>
                                                Photoshop Create Path From Image.
                                            </h6>
                                            <span className=""style={{fontFamily: "'Roboto', sans-serif"}}>Oct 2020, 05:57 PM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="footer-item">
                                <h5 className=""style={{fontFamily: "'Roboto', sans-serif"}}>Address</h5>

                                <ul className="p-0 m-0 pt-4">
                                    <li className="list-group-item d-flex gap-3">
                                        <div className="">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className=""style={{fontFamily: "'Roboto', sans-serif"}}>
                                            <p style={{fontFamily: "'Roboto', sans-serif"}}>P13-14 , Metro Tower , Vijay Nagar , Indore</p>
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex gap-3">
                                        <div className="">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className=""style={{fontFamily: "'Roboto', sans-serif"}}>
                                            <p>instadatatech@gmail.com</p>
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex gap-3">
                                        <div className="">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <div className=""style={{fontFamily: "'Roboto', sans-serif"}}>
                                            <p>+91 8269347043</p>
                                        </div>
                                    </li>
                                </ul>

                                <ul className="d-flex gap-3">
                                    <li className="list-group-item"><i className="bi bi-linkedin"></i></li>
                                    <li className="list-group-item"><i className="bi bi-instagram"></i> </li>
                                    <li className="list-group-item"><i className="bi bi-twitter"></i> </li>
                                    <li className="list-group-item"><i className="bi bi-facebook"></i> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        <div class=" py-3 text-light " style={{ backgroundColor: "#1f2a36" }}>
            <div class="container">
                <div class="d-flex justify-content-between">
                    <div class="col-lg-6">
                        <div class="bottom-footer-text"> <p style={{fontFamily: "'Roboto', sans-serif"}}>Copyright 2023. All rights reserved.</p></div>
                    </div>
                    <div class="col-lg-6 ">
                        <div class="d-flex justify-content-end align-content-center gap-3">

                            <span style={{fontFamily: "'Roboto', sans-serif"}}>Terms of Service</span>
                            <span style={{fontFamily: "'Roboto', sans-serif"}}>Privacy Policy</span>
                            <span style={{fontFamily: "'Roboto', sans-serif"}}>Cookie Policy</span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
