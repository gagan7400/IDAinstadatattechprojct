import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Prop_item({data}) {
    return (
        <div className='text-center p-lg-5 row-gap-5' style={{backgroundColor:'#d9f2f7'}}>
            <div className='fs-1' style={{fontWeight:"700",fontFamily: "'Roboto', sans-serif"}}>{data}</div>
          
            <div className='d-flex justify-content-center'>
               <NavLink to='/'  style={{fontFamily: "'Roboto', sans-serif"}} className='text-decoration-none text-dark'><span className='bi bi-house-door-fill text-info'></span> Home</NavLink>
               <div  style={{fontFamily: "'Roboto', sans-serif"}}><span className='bi bi-arrow-right-short text-info ps-1'></span> {data}</div>
            </div>
        </div>
    )
}
