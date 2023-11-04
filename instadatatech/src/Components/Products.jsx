import React from 'react'
import Letsstart from './Letsstart';
function Products() {

    return (
        <div className=''>
            <div className='Product-main pt-5'>
         
                <div className="btn btn--base outline mb-2 text-light" style={{fontFamily: "'Roboto', sans-serif",borderStyle:'none' ,background:' linear-gradient(90deg, rgba(81,85,251,1) 24%, rgba(25,209,253,1) 99%, rgba(220,187,247,1) 100%)'}}>Our Products</div>




                <div className='Product-title'>
                    <h2 class="pro-title text-center">
                        AI-Powered Analytics Solutions: Transforming Data <br />
                        <div > into Insights</div>
                    </h2>
                    <p class="Prod-para text-center pb-4">Use AI to help boost your flow  save hours of work. Generate high quality content with our AI.</p>
                </div>


                <div className='d-flex justify-content-center'>
                    <div className="card product-card ">
                        <div className="Pro-price">
                            <h3 class="Pro-price-title">₹ 0.00<span>/m</span> </h3>
                        </div>
                        <h3 style={{ fontWeight: "700", margin: "13px 90px", }}>CraftVeda.ai</h3>
                        <div class="item_list " style={{ marginBottom: "25px" }}>
                            <ul style={{ marginLeft: "70px" }}>
                                <li style={{ paddingBottom: "8px", marginBottom: "10px", display: "flex", fontSize: "17px" }}> <i class="fas fa-check-circle" style={{ margin: "6px -29px", position: "absolute", fontSize: "20px", color: "#ff9435" }}></i>Programming Code Generator</li>
                                <li style={{ paddingBottom: "8px", marginBottom: "10px", display: "flex", fontSize: "17px" }}> <i class="fas fa-check-circle" style={{ margin: "6px -29px", position: "absolute", fontSize: "20px", color: "#ff9435" }}></i>AI Chatbot</li>
                                <li style={{ paddingBottom: "8px", marginBottom: "10px", display: "flex", fontSize: "17px" }}> <i class="fas fa-check-circle" style={{ margin: "6px -29px", position: "absolute", fontSize: "20px", color: "#ff9435" }}></i>Keywords Generator</li>
                                <li style={{ paddingBottom: "8px", marginBottom: "10px", display: "flex", fontSize: "17px" }}> <i class="fas fa-check-circle" style={{ margin: "6px -29px", position: "absolute", fontSize: "20px", color: "#ff9435" }}></i>Text to Emoji</li>
                                <li style={{ paddingBottom: "8px", marginBottom: "10px", display: "flex", fontSize: "17px" }}> <i class="fas fa-check-circle" style={{ margin: "6px -29px", position: "absolute", fontSize: "20px", color: "#ff9435" }}></i>Blog Article</li>
                                <li style={{ paddingBottom: "8px", marginBottom: "10px", display: "flex", fontSize: "17px" }}> <i class="fas fa-check-circle" style={{ margin: "6px -29px", position: "absolute", fontSize: "20px", color: "#ff9435" }}></i>Social Media Hashtags</li>
                                <li style={{ paddingBottom: "8px", marginBottom: "10px", display: "flex", fontSize: "17px" }}> <i class="fas fa-check-circle" style={{ margin: "6px -29px", position: "absolute", fontSize: "20px", color: "#ff9435" }}></i>Tweet Generator</li>
                                <li style={{ paddingBottom: "8px", marginBottom: "10px", display: "flex", fontSize: "17px" }}> <i class="fas fa-check-circle" style={{ margin: "6px -29px", position: "absolute", fontSize: "20px", color: "#ff9435" }}></i>Twitter Thread Generator</li>
                                <li style={{ paddingBottom: "8px", marginBottom: "10px", display: "flex", fontSize: "17px" }}> <i class="fas fa-check-circle" style={{ margin: "6px -29px", position: "absolute", fontSize: "20px", color: "#ff9435" }}></i>Email Generator</li>
                                <li style={{ paddingBottom: "8px", marginBottom: "10px", display: "flex", fontSize: "17px" }}> <i class="fas fa-check-circle" style={{ margin: "6px -29px", position: "absolute", fontSize: "20px", color: "#ff9435" }}></i>SEO Description</li>
                                <li style={{ paddingBottom: "8px", marginBottom: "10px", display: "flex", fontSize: "17px" }}> <i class="fas fa-check-circle" style={{ margin: "6px -29px", position: "absolute", fontSize: "20px", color: "#ff9435" }}></i>SEO Keywords</li>
                                <li style={{ paddingBottom: "8px", marginBottom: "10px", display: "flex", fontSize: "17px" }}> <i class="fas fa-check-circle" style={{ margin: "6px -29px", position: "absolute", fontSize: "20px", color: "#ff9435" }}></i>Startup Ideas</li>
                                <li style={{ paddingBottom: "8px", marginBottom: "10px", display: "flex", fontSize: "17px" }}> <i class="fas fa-check-circle" style={{ margin: "6px -29px", position: "absolute", fontSize: "20px", color: "#ff9435" }}></i>Viral Ideas</li>
                                <li style={{ paddingBottom: "8px", marginBottom: "10px", display: "flex", fontSize: "17px" }}> <i class="fas fa-check-circle" style={{ margin: "6px -29px", position: "absolute", fontSize: "20px", color: "#ff9435" }}></i>Song Lyrics Generator</li>
                                <li style={{ paddingBottom: "8px", marginBottom: "10px", display: "flex", fontSize: "17px" }}> <i class="fas fa-check-circle" style={{ margin: "6px -29px", position: "absolute", fontSize: "20px", color: "#ff9435" }}></i>Quotes Generator</li>

                            </ul>
                        </div>


                        <div className="Product-top" style={{ marginTop: "38px", }}>
                            <div className="sections slides">
                                <div className="btn-product slide Slide-right" style={{ marginLeft: '-32px' }}>Get Started<i className="fas fa-arrow-right" style={{ marginLeft: "5px" }}></i></div>
                            </div>
                        </div>


                    </div>
                </div>




            </div>
            <Letsstart />
        </div>
    )
}

export default Products;