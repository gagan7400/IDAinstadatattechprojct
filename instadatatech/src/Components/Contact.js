import React, { useState,useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHouse, faArrowRight, faPhone, faLocationDot, faMessage } from "@fortawesome/free-solid-svg-icons";

const IDA = () => {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      }, []);

    const [isHovered, setIsHovered] = useState(false);

    const container = {

        display: "flex",
        marginTop: "100px",
        justifyContent: "space-evenly"
    };
    const Maincontainer = {
        width: "1260px",
        margin: "0 auto"
    }
    const call = {
        border: "1px solid blue",
        fontSize: "20px",
        fontWeight: "500",
        height: "160px",
        width: "400px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column", // Change to "column" to stack elements vertically
        alignItems: "center", // Center items horizontally
        justifyContent: "center", // Center items vertically
        transition: 'box-shadow 0.3s',
        boxShadow: isHovered ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none', // Apply box-shadow on hover
        cursor: isHovered ? 'pointer' : 'default', // Change cursor on hover



    };


    const icon = {

        fontSize: "40px",
        marginRight: "20px",
    };
    //   -----------------------------------




    return (
        <div className="pt-5">
            
                <div className="container" >
                    <div className="row gy-4 d-flex  flex-wrap">
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info">
                                <div className=" mb-30">
                                    <div className="p-lg-4">
                                        <h4 style={{ fontFamily: "'Roboto', sans-serif" }}>Call Us</h4>
                                        <div className="d-flex gap-3 pt-2">
                                            <div className="cont-icon">
                                                <i className="fas fa-phone fs-1 text-info"></i>
                                            </div>
                                            <div className="pt-2">
                                                <h6><a href="tel:+91 8269347043" className="text-decoration-none text-secondary">+91 8269347043</a></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="contact-info">
                                <div class="contact-info__addres-wrap mb-30">
                                    <div className="p-lg-4">
                                        <h4 style={{ fontFamily: "'Roboto', sans-serif" }}>Email</h4>
                                        <div className="d-flex gap-4 pt-2">
                                            <div className="cont-icon">
                                                <i className="far fa-envelope fs-1 text-info"></i>
                                            </div>
                                            <div className="pt-2">
                                                <h6><a href="mailto:instadatatech@gmail.com"className="text-decoration-none text-secondary">instadatatech@gmail.com</a></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="contact-info">
                                <div class="contact-info__addres-wrap mb-30">
                                    <div className="pt-lg-4 pb-lg-2 pe-lg-4 ps-lg-4">
                                        <h4 style={{ fontFamily: "'Roboto', sans-serif" }}>Office</h4>
                                        <div className="d-flex gap-4 pt-2">
                                            <div className="cont-icon">
                                                <i className="fas fa-map-marker-alt fs-1 text-info"></i>
                                            </div>
                                            <div className="pt-2">
                                                <h6 ><a className="text-decoration-none text-secondary">P13-14 , Metro Tower , Vijay Nagar , Indore</a></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           


            {/* -------------------------------------- */}
            <div >
                <div>
                    <div className=" p-lg-5  contact__">
                        <div className=" contact1__">
                            <img className="contact1__img" src="boi.jpg" />
                        </div>

                        <div className="row gy-md-4 gy-3 contact2__  p-lg-5 row-gap-1 ">
                            <p className="fs-1" style={{ fontFamily: "'Roboto', sans-serif" }}> Contact us </p>
                            <div>
                                <label for="exampleFormControlInput1" style={{ fontFamily: "'Roboto', sans-serif" }} class="form-label">Name</label>
                                <input name="name" type="text" style={{ fontFamily: "'Roboto', sans-serif" }} class="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div>
                                <label for="exampleFormControlInput1" style={{ fontFamily: "'Roboto', sans-serif" }} class="form-label">Email address</label>
                                <input type="email" class="form-control" style={{ fontFamily: "'Roboto', sans-serif" }} id="exampleFormControlInput1" placeholder="" />
                            </div>
                            <div>
                                <label for="exampleFormControlInput1" style={{ fontFamily: "'Roboto', sans-serif" }} class="form-label">Subject</label>
                                <input name="subject" type="text" style={{ fontFamily: "'Roboto', sans-serif" }} class="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div>
                                <label for="exampleFormControlTextarea1" style={{ fontFamily: "'Roboto', sans-serif" }} class="form-label">Message</label>
                                <textarea class="form-control" style={{ fontFamily: "'Roboto', sans-serif" }} name="message" id="message" rows="3"></textarea>
                            </div>


                            <div className="col-sm-12">
                                <button type="submit" style={{ fontFamily: "'Roboto', sans-serif", background: ' linear-gradient(90deg, rgba(81,85,251,1) 24%, rgba(25,209,253,1) 70%, rgba(220,187,247,1) 100%)', borderStyle: 'none' }} className="btn btn--base outline mb-2 text-light">
                                    Send Your Message<i className="fas fa-paper-plane"></i>
                                    <span style={{ top: "249px", left: "75.9844px" }}></span>
                                </button>

                            </div>
                        </div>

                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5952091.83763245!2d78.50584223622774!3d20.695544283847124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x434d0d6b3ad47f4b%3A0x23d88bec3ff7aa24!2sInsta%20Data%20Tech!5e0!3m2!1sen!2sin!4v1698989510312!5m2!1sen!2sin" height="450" width="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>
            </div>

        </div>








    );
}

export default IDA;
