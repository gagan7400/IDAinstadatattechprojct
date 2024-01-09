import React from 'react'

export default function Blog_home() {
  return (
    <div className='pt-5 d-flex justify-content-center'>
         <div className=" text-center w-75">
            {/* <button className="btn-1" style={{ fontFamily: "'Roboto', sans-serif" ,borderStyle:'none'}}>Blog</button> */}
            <a target="_blank" className="btn btn--base outline mb-2 text-light pe-4 ps-4" style={{ fontFamily: "'Roboto', sans-serif", borderStyle: 'none', background: ' linear-gradient(90deg, rgba(81,85,251,1) 24%, rgba(25,209,253,1) 99%, rgba(220,187,247,1) 100%)' }}>
            Blog </a>
            <p className='fs-1' style={{fontWeight:'700', fontFamily: "'Roboto', sans-serif" }}>Latest News</p>

            <span className='fs-5' style={{ fontFamily: "'Roboto', sans-serif" }}>
            Data transfer capacity has generally been inconsistent dispersed around the world, with expanding. focus in the advanced age just 10 nations have facilitated .
              just 10 nations have facilitated .
            </span>
          </div>
    </div>
  )
}
