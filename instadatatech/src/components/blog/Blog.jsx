import React from 'react';
import './Blog.css'

function Blog() {
    return (
        <>
            <div className="main gap-5 main_blog">
                <div className="first-item shadow rounded-4" id='content' style={{ width: '361px' }}>
                    <div className="thumbnail">
                        <img width={'400px'} src="https://www.instadatatech.com/assets/images/frontend/blog/thumb_6422b254567971679995476.jpg" alt="not-found" />
                    </div>
                    <div className="item-content">
                        <div className=" pt-4 ">
                            <li className='d-flex gap-2'>
                                <span>
                                    <i class="fas fa-calendar-alt text-info"></i>
                                </span>
                                <p>Mar 2023, 11:52 PM</p>
                            </li>
                        </div>
                        <h4>Photoshop Create Path From Image.</h4>
                        <div className="readmore">
                            <a href="#">
                                <span>
                                    <h6>read more</h6>
                                </span>
                                <svg width="24" height="24" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#000000" d="m224.49 136.49l-72 72a12 12 0 0 1-17-17L187 140H40a12 12 0 0 1 0-24h147l-51.49-51.52a12 12 0 0 1 17-17l72 72a12 12 0 0 1-.02 17.01Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="second-item ms-1 shadow rounded-4" id='content' style={{ width: '361px' }}>
                    <div className="thumbnail">
                        <img width={'400px'} src="https://www.instadatatech.com/assets/images/frontend/blog/thumb_6423d54ec0f671680069966.jpg" alt="not-found" />
                    </div>
                    <div className="item-content">
                        <div className="text-item pt-4">
                            <li className='d-flex gap-2'>
                                <span>
                                    <i class="fas fa-calendar-alt text-info"></i>
                                </span>
                                <p>Mar 2023, 01:45 AM</p>
                            </li>
                        </div>
                        <h4>Color Match Perfectaly To <br />Impress Your Constumers.</h4>
                        <div className="readmore">
                            <a href="#">
                                <span>
                                    <h6>read more</h6>
                                </span>
                                <svg width="24" height="24" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#000000" d="m224.49 136.49l-72 72a12 12 0 0 1-17-17L187 140H40a12 12 0 0 1 0-24h147l-51.49-51.52a12 12 0 0 1 17-17l72 72a12 12 0 0 1-.02 17.01Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="third-item shadow rounded-4" id='content' style={{ width: '361px' }}>
                    <div className="thumbnail">
                        <img width={'400px'} src="https://www.instadatatech.com/assets/images/frontend/blog/thumb_6422b22586f7a1679995429.jpg" alt="not-found" />
                    </div>
                    <div className="item-content">
                        <div className="text-item pt-4">
                            <li className='d-flex gap-2'>
                                <span>
                                    <i class="fas fa-calendar-alt text-info"></i>
                                </span>
                                <p>Oct 2020, 05:57 PM</p>
                            </li>
                        </div>
                        <h4>Photoshop Create Path From Image.</h4>
                        <div className="readmore">
                            <a href="#">
                                <span>
                                    <h6>read more</h6>
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