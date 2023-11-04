import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faArrowRight } from '@fortawesome/free-solid-svg-icons'; 
import Letsstart from './Letsstart' ;
function Products() {
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
    return (
        <>
            <div className='Product-main'>
                <div>Products
                    <strong style={centerStyle}>Products</strong>
                    <p style={centerStylee}>
                        <FontAwesomeIcon icon={faHouse} /> Home
                        <FontAwesomeIcon icon={faArrowRight} /> Products
                    </p>
                </div>

                
                    <div className="Product-top">
                        <div className="sections slides">
                            <div className="btn-product slide Slide-right" style={{marginLeft:"531px"}}>Our Products</div>
                        </div>
                    </div>
                


                <div className='Product-title'>
                    <h2 class="pro-title">
                        AI-Powered Analytics Solutions: Transforming Data <br />
                        <div style={{ marginLeft: "323px" }}> into Insights</div>
                    </h2>
                    <p class="Prod-para">Use AI to help boost your flow  save hours of work. Generate high quality content with our AI.</p>
                </div>


                <div className="card product-card">
                    <div className="Pro-price">
                        <h3 class="Pro-price-title">₹ 0.00<span>/m</span> </h3>
                    </div>
                    <h3 style={{ fontWeight: "700", margin: "13px 90px", }}>CraftVeda.ai</h3>
                    <div class="item_list" style={{marginBottom:"25px"}}>
                        <ul style={{marginLeft:"70px"}}>
                            <li style={{paddingBottom:"8px",marginBottom:"10px",display:"flex",fontSize:"17px"}}> <i class="fas fa-check-circle" style={{margin:"6px -29px",position:"absolute" , fontSize:"20px",color:"#ff9435"}}></i>Programming Code Generator</li>
                            <li style={{paddingBottom:"8px",marginBottom:"10px",display:"flex",fontSize:"17px"}}> <i class="fas fa-check-circle" style={{margin:"6px -29px",position:"absolute" , fontSize:"20px",color:"#ff9435"}}></i>AI Chatbot</li>
                            <li style={{paddingBottom:"8px",marginBottom:"10px",display:"flex",fontSize:"17px"}}> <i class="fas fa-check-circle" style={{margin:"6px -29px",position:"absolute" , fontSize:"20px",color:"#ff9435"}}></i>Keywords Generator</li>
                            <li style={{paddingBottom:"8px",marginBottom:"10px",display:"flex",fontSize:"17px"}}> <i class="fas fa-check-circle" style={{margin:"6px -29px",position:"absolute" , fontSize:"20px",color:"#ff9435"}}></i>Text to Emoji</li>
                            <li style={{paddingBottom:"8px",marginBottom:"10px",display:"flex",fontSize:"17px"}}> <i class="fas fa-check-circle" style={{margin:"6px -29px",position:"absolute" , fontSize:"20px",color:"#ff9435"}}></i>Blog Article</li>
                            <li style={{paddingBottom:"8px",marginBottom:"10px",display:"flex",fontSize:"17px"}}> <i class="fas fa-check-circle" style={{margin:"6px -29px",position:"absolute" , fontSize:"20px",color:"#ff9435"}}></i>Social Media Hashtags</li>
                            <li style={{paddingBottom:"8px",marginBottom:"10px",display:"flex",fontSize:"17px"}}> <i class="fas fa-check-circle" style={{margin:"6px -29px",position:"absolute" , fontSize:"20px",color:"#ff9435"}}></i>Tweet Generator</li>
                            <li style={{paddingBottom:"8px",marginBottom:"10px",display:"flex",fontSize:"17px"}}> <i class="fas fa-check-circle" style={{margin:"6px -29px",position:"absolute" , fontSize:"20px",color:"#ff9435"}}></i>Twitter Thread Generator</li>
                            <li style={{paddingBottom:"8px",marginBottom:"10px",display:"flex",fontSize:"17px"}}> <i class="fas fa-check-circle" style={{margin:"6px -29px",position:"absolute" , fontSize:"20px",color:"#ff9435"}}></i>Email Generator</li>
                            <li style={{paddingBottom:"8px",marginBottom:"10px",display:"flex",fontSize:"17px"}}> <i class="fas fa-check-circle" style={{margin:"6px -29px",position:"absolute" , fontSize:"20px",color:"#ff9435"}}></i>SEO Description</li>
                            <li style={{paddingBottom:"8px",marginBottom:"10px",display:"flex",fontSize:"17px"}}> <i class="fas fa-check-circle" style={{margin:"6px -29px",position:"absolute" , fontSize:"20px",color:"#ff9435"}}></i>SEO Keywords</li>
                            <li style={{paddingBottom:"8px",marginBottom:"10px",display:"flex",fontSize:"17px"}}> <i class="fas fa-check-circle" style={{margin:"6px -29px",position:"absolute" , fontSize:"20px",color:"#ff9435"}}></i>Startup Ideas</li>
                            <li style={{paddingBottom:"8px",marginBottom:"10px",display:"flex",fontSize:"17px"}}> <i class="fas fa-check-circle" style={{margin:"6px -29px",position:"absolute" , fontSize:"20px",color:"#ff9435"}}></i>Viral Ideas</li>
                            <li style={{paddingBottom:"8px",marginBottom:"10px",display:"flex",fontSize:"17px"}}> <i class="fas fa-check-circle" style={{margin:"6px -29px",position:"absolute" , fontSize:"20px",color:"#ff9435"}}></i>Song Lyrics Generator</li>
                            <li style={{paddingBottom:"8px",marginBottom:"10px",display:"flex",fontSize:"17px"}}> <i class="fas fa-check-circle" style={{margin:"6px -29px",position:"absolute" , fontSize:"20px",color:"#ff9435"}}></i>Quotes Generator</li>

                        </ul>
                    </div>

                  
                    <div className="Product-top" style={{marginTop:"38px" , }}>
                        <div className="sections slides">
                            <div className="btn-product slide Slide-right" style={{marginLeft:'77px'}}>Get Started<i className="fas fa-arrow-right" style={{ marginLeft: "5px" }}></i></div>
                        </div>
                    </div>
               

                </div>




            </div> 
            <Letsstart/>
            
        </>
    )
}

export default Products;