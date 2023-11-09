import React from 'react'

export default function News_letter() {
  return (
    <div>
      <div   style={{ backgroundImage: "url(https://www.instadatatech.com/assets/presets/themesThree/images/subscribe-bg.jpg)" }}>
         <div style={{backgroundColor:'#0b1231',padding:'4rem',opacity:"94%"}}>
         <div className='d-flex justify-content-center 'style={{fontFamily: "'Roboto', sans-serif"}}>
           <div>
           <div className="cone">
            <button className="btn-1"style={{fontFamily: "'Roboto', sans-serif"}}>News Letter</button>
            <br />
            <br />
            <p style={{fontFamily: "'Roboto', sans-serif"}}>Subscribe Our Newsletter</p>
           
            
            <span style={{fontFamily: "'Roboto', sans-serif"}}>
              Data transfer capacity has generally been inconsistent dispersed
              around
              <br />the world, with expanding focus in the advanced age just.
            </span>
            <br />
            <br />
           

            <input type="text" placeholder="Enter your mail" className="input" />
             </div>
           </div>
        </div>
         </div>
      </div>
    </div>
  )
}


// import React from 'react';

// const News_letter = () => {
//   return (
//     <div  >
//       <section className="z-1" style={{ backgroundImage: "url(https://www.instadatatech.com/assets/presets/themesThree/images/subscribe-bg.jpg)" }}>
//       <div className=""style={{backgroundColor:'#0b1231',padding:'8rem',opacity:"94%"}}>
//         <div className="row  gy-4 justify-content-center align-items-center">
//           <div className="col-lg-7">
//             <div className="subscribe-wrap position-relative">
            
//               <span className="banner-effect shape-2 "></span>
//               <div className="section-heading">
//                 <span className="subtitle">News Letter</span>
//                 <h2 className="section-heading__title text-white">
//                   Subscribe Our Newsletter
//                 </h2>
//                 <p className="section-heading__desc text-white">Data transfer capacity has generally been inconsistent dispersed around the world, with increasing focus in the digital age just.</p>
//               </div>
//               <div className="subscribe-wrap__input">
//                 <form action="/" method="POST">
//                   <input type="hidden" name="_token" value="Gb29R6lF2GreM7dPmbx2px75hfLjnXH9M6yfM0Qv" id="_token" />
//                   <input type="email" className="form--control" name="email" placeholder="Enter your mail" id="email" />
//                   <button><i className="fas fa-paper-plane"></i></button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     </div>
//   );
// };

// export default News_letter;
