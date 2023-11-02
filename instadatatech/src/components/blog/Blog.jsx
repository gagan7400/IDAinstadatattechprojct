import React from 'react';
import './Blog.css'

function Blog() {
    return (
        <>
            <div className="main p-lg-5 ">
                <div className="first-item" id='content'style={{width:'400px'}}>
                    <div className="thumbnail">
                        <img width={'400px'} src="https://www.instadatatech.com/assets/images/frontend/blog/thumb_6422b254567971679995476.jpg" alt="not-found" />
                    </div>
                    <div className="item-content">
                        <ul className="text-item">
                            <li>
                                <span>
                                    <i class="fas fa-calendar-alt"></i>
                                </span>
                                <p>Mar 2023, 11:52 PM</p>
                            </li>
                        </ul>
                        <h3>Photoshop Create Path From Image.</h3>
                        <div className="readmore">
                            <a href="#">
                                <span>
                                    <h2>read more</h2>
                                </span>
                                <svg width="24" height="24" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#000000" d="m224.49 136.49l-72 72a12 12 0 0 1-17-17L187 140H40a12 12 0 0 1 0-24h147l-51.49-51.52a12 12 0 0 1 17-17l72 72a12 12 0 0 1-.02 17.01Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="second-item ms-1" id='content' style={{width:'400px'}}>
                    <div className="thumbnail">
                        <img width={'400px'} src="https://www.instadatatech.com/assets/images/frontend/blog/thumb_6423d54ec0f671680069966.jpg" alt="not-found" />
                    </div>
                    <div className="item-content">
                        <ul className="text-item">
                            <li>
                                <span>
                                    <i class="fas fa-calendar-alt"></i>
                                </span>
                                <p>Mar 2023, 01:45 AM</p>
                            </li>
                        </ul>
                        <h3>Color Match Perfectaly To Impress Your Constumers.</h3>
                        <div className="readmore">
                            <a href="#">
                                <span>
                                    <h2>read more</h2>
                                </span>
                                <svg width="24" height="24" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#000000" d="m224.49 136.49l-72 72a12 12 0 0 1-17-17L187 140H40a12 12 0 0 1 0-24h147l-51.49-51.52a12 12 0 0 1 17-17l72 72a12 12 0 0 1-.02 17.01Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="third-item" id='content'style={{width:'400px'}}>
                    <div className="thumbnail">
                        <img width={'400px'} src="https://www.instadatatech.com/assets/images/frontend/blog/thumb_6422b22586f7a1679995429.jpg" alt="not-found" />
                    </div>
                    <div className="item-content">
                        <ul className="text-item">
                            <li>
                                <span>
                                    <i class="fas fa-calendar-alt"></i>
                                </span>
                                <p>Oct 2020, 05:57 PM</p>
                            </li>
                        </ul>
                        <h3>Photoshop Create Path From Image.</h3>
                        <div className="readmore">
                            <a href="#">
                                <span>
                                    <h4>read more</h4>
                                </span>
                                <svg width="24" height="24" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#000000" d="m224.49 136.49l-72 72a12 12 0 0 1-17-17L187 140H40a12 12 0 0 1 0-24h147l-51.49-51.52a12 12 0 0 1 17-17l72 72a12 12 0 0 1-.02 17.01Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog;