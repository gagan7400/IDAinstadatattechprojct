import React from 'react';
import './Blog.css';
import 'remixicon/fonts/remixicon.css';

function Blogpage1() {
    return (
        <>
            <div className="blogpage1" id="blogpage">
                <div id="blogpage-side1">
                    <div className="blogpage1-image" id="blogpage-image">
                        <img src="https://www.instadatatech.com/assets/images/frontend/blog/6422b254567971679995476.jpg" alt="#" />
                    </div>
                    <div className="blogpage1-content" id="blogpage-content">
                        <div id="date-blogpage"> <i class="fas fa-calendar-alt text-primary"></i><p>Mar 2023, 11:52 PM</p></div>
                        <h3>Photoshop Create Path From Image.</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <h3>Why do we use it?</h3>
                        <p>It is a lonhg established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        <h3>Where does it come from?</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    </div>
                    <div className="blogpage1-icon d-flex" id="blogpage-icon">
                        <h4>Share This</h4>
                        <div className="icons" id="icons">
                            <i class="ri-instagram-line"></i>
                            <i class="ri-twitter-fill"></i>
                            <i class="ri-linkedin-fill"></i>
                        </div>
                    </div>
                </div>
                <div id="blogpage-side2">
                    <div className="alldata-blogpage1" id="alldata-blogpage">
                        <h3>Latests</h3>
                        <div className="fistalldata-item" id="sidebar-data">
                            <img src="https://www.instadatatech.com/assets/images/frontend/blog/6422b254567971679995476.jpg" alt="#" />
                            <div>
                                <h6>Photoshop Create Path From Image.</h6>
                                <p>Mar 2023, 11:52 PM</p>
                            </div>
                        </div>
                        <div className="secondalldata-item" id="sidebar-data">
                            <img src="https://www.instadatatech.com/assets/images/frontend/blog/6423d54ec0f671680069966.jpg" alt="#" />
                            <div>
                                <h6>Color Match Perfectaly To Impress Your Constumers.</h6>
                                <p>Mar 2023, 01:45 AM</p>
                            </div>
                        </div>
                        <div className="thirddata-item" id="sidebar-data">
                            <img src="https://www.instadatatech.com/assets/images/frontend/blog/6422b22586f7a1679995429.jpg" alt="#" />
                            <div>
                                <h6>Photoshop Create Path From Image.</h6>
                                <p>Oct 2020, 05:57 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogpage1;