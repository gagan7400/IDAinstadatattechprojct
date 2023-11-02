import React from 'react'

export default function Headernav() {
    return (
        <div className='Nav_1' >
            <div className="container p-2  ">
                <div className="top-header-wrapper d-flex justify-content-between align-items-center flex-wrap ">
                    <div className="top-contact">
                        <ul className="d-flex gap-5 mb-0">
                            <li className="contact-list__item d-flex align-items-center">
                                <span className="pe-2"><i className="fas fa-phone text-info"></i></span>
                                <a href="tel:+91 8269347043" className="list-group-item">+91 8269347043</a>
                            </li>
                            <li className="contact-list__item d-flex align-items-center">
                                <span className="pe-2"><i className="fas fa-envelope text-info"></i></span>
                                <a href="mailto:instadatatech@gmail.com" className="list-group-item">instadatatech@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                    <div className="top-button d-flex  gap-2 align-items-center">
                        <div className="">
                            <select className="form-select langSel"style={{fontSize:"11px"}} >
                                <option value="en" selected>English</option>
                                <option value="es">Spanish</option>
                            </select>
                        </div>
                        <ul className=" mb-0 d-flex align-items-center" style={{ listStyle: "none" }}>
                            <li className="">
                                <ul className="gap-2 mb-0 d-flex align-items-center" style={{ listStyle: "none" }}>
                                    <li className="  btn btn-outline-info p-1 ps-2 pe-2"style={{fontSize:"15px"}}>
                                        <a href="" className="list-group-item"><i className="fab fa-linkedin"></i></a>
                                    </li>
                                    <li className="btn btn-outline-info p-1 ps-2 pe-2"style={{fontSize:"15px"}}>
                                        <a href="" className="list-group-item"><i className="fab fa-instagram"></i></a>
                                    </li>
                                    <li className=" btn btn-outline-info p-1 ps-2 pe-2"style={{fontSize:"15px"}}>
                                        <a href="" className="list-group-item"><i className="fab fa-twitter"></i></a>
                                    </li>
                                    <li className="btn btn-outline-info p-1 ps-2 pe-2"style={{fontSize:"15px"}}>
                                        <a href="" className="list-group-item"><i className="fab fa-facebook-square "></i></a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>







        </div>
    )
}