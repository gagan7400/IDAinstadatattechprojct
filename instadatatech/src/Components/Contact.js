import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHouse, faArrowRight, faPhone, faLocationDot, faMessage} from '@fortawesome/free-solid-svg-icons';

const IDA = () => {

    const [isHovered, setIsHovered] = useState(false);
    const centerStyle  = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:"30px",
    };
    const centerStylee  = {
        display: 'flex',

        alignItems: 'center',
        justifyContent: 'space-around',
        width:"20%",marginTop:"30px",
        // textAlign:"center"
        marginLeft:"500px"
    };
    const container ={

        display:"flex",
        marginTop:"100px",
        justifyContent:"space-evenly"
    };
    const Maincontainer ={
        width:"1260px",
        margin:"0 auto"
    }
    const call = {
        border: "1px solid blue",
        fontSize:"20px",
        fontWeight:"500",
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
  

      const icon ={

        fontSize:"40px",
        marginRight:"20px",
        // fill:"yellow",
        color:"grey"
      };
    //   -----------------------------------

    const pic ={
        width:"500px",
        height:"680px",
        borderRadius:"30px",
    };
    const secondContainer={
        marginTop:"250px",
        backgroundColor:"#B0E0E6",
        padding:"50px"
    };
    const contact={
        display:"flex",
         
    };
    const contactForm={
        width:"500px",
        // height:"200px",
        marginLeft:"80px",
        fontSize:"20px"
    };
    const con={
        fontSize:"40px",
        fontWeight:"700"
    };
    const inp={
        width:"600px",
        // height:"40px",
        borderRadius:"10px",
        border:"none",
        
    };
   
       
    return (
        <div >
            <div style={Maincontainer}>
            <div >
                <strong style={centerStyle}>Contact Us</strong>
                <p style={centerStylee}>
                    <FontAwesomeIcon icon={faHouse} /> Home
                    <FontAwesomeIcon icon={faArrowRight} /> contact us
                </p>

                <div style={container}>
                    <div style={call}
                                            onMouseEnter={() => setIsHovered(true)}
                                            onMouseLeave={() => setIsHovered(false)}
                    >call us
                        <span> <FontAwesomeIcon icon={faPhone}  style={icon}/> <span>+918269347043</span> </span>
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
            <div style={secondContainer}>
                <div style={Maincontainer}>
                    <div style={contact}>
                <span>
                <img src="boi.jpg"  style={pic} / >
                </span>
                    <div style={contactForm}>
                        <p style={con}> Contact us </p>
                        <br/>
                      
                        <label className="me">Name</label>
                        <br/>
                        <br/>
                        <input type="text" style={inp}/>
                        <br/>
                        <br/>
                        <label>Email</label>
                        <br/>
                        <br/>
                        <input type="text" style={inp}/>
                        <br/>
                        <br/>
                        <label>Subject</label>
                        <br/>
                        <br/>
                        <input type="text" style={inp}/>
                        <br/>
                        <br/>
                        <label>Message</label>
                        <br/>
                        <br/>
                        <input type="text" style={inp}/>
                        <br/>
                        <br/>
                        <div className="sections slides">
                            
                        <button     className="btn slide Slide-right"  > Send Your Message    <FontAwesomeIcon icon={faMessage} /></button>
                        </div>
                    </div>
                        
                    </div>


                </div>
            </div>

        </div>








    );
}

export default IDA;
