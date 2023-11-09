import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHouse, faArrowRight, faPhone, faLocationDot, faMessage } from "@fortawesome/free-solid-svg-icons";

const IDA = () => {

    const [isHovered, setIsHovered] = useState(false);
    const centerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: "30px",
    };
    const centerStylee = {
        display: 'flex',

        alignItems: 'center',
        justifyContent: 'space-around',
        width: "20%", marginTop: "30px",
        // textAlign:"center"
        marginLeft: "500px"
    };
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
        // fill:"yellow",
        color: "grey"
    };
    //   -----------------------------------




    return (
        <div className="pt-4">
            <div style={Maincontainer}>
                <div >
                   
                    <div style={container}>
                        <div style={call}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >call us
                            <span> <FontAwesomeIcon icon={faPhone} style={icon} /> <span>+918269347043</span> </span>
                        </div>
                        <div style={call}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            Email
                            <span >   <FontAwesomeIcon icon={faEnvelope} style={icon} /> <span > instadatatech@gmail.com  </span >  </span>
                        </div>
                        <div style={call}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            Office
                            <span>  <FontAwesomeIcon icon={faLocationDot} style={icon} /> <span>P13-14, Metro Tower,  Indore</span> </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* -------------------------------------- */}
            <div >
                <div>
                    <div className="d-flex p-lg-5 ">
                        <div className="col-6 p-lg-5 mt-5">
                            <img style={{ width: '40vw', borderRadius: '5%' }} src="boi.jpg" />
                        </div>

                        <div className="row gy-md-4 gy-3 col-6 p-lg-5 row-gap-1 grid gap-0 ">
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
                                <button type="submit" style={{ fontFamily: "'Roboto', sans-serif", background: ' linear-gradient(90deg, rgba(81,85,251,1) 24%, rgba(25,209,253,1) 70%, rgba(220,187,247,1) 100%)',borderStyle:'none'}} className="btn btn--base outline mb-2 text-light">
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
