import React from 'react'

export default function FAQ_about() {
  return (
    <div>
         <div className="secondcontainer">
          <div className="text-center w-75 m-auto">
            <button className="btn-1" style={{ fontFamily: "'Roboto', sans-serif" ,borderStyle:'none'}}>FAQ</button>

            <p className='fs-1' style={{ fontWeight:'700', fontFamily: "'Roboto', sans-serif" }}>Frequently Asked Question.</p>

            <span className='fs-5' style={{ fontFamily: "'Roboto', sans-serif" }}>
              Data transfer capacity has generally been inconsistent dispersed
              around the world, with expanding <br /> focus in the advanced age
              just 10 nations have facilitated .
            </span>
          </div>

          <div className="FAQ_section" >
            <img className="rounded faq_img" src="kalu.jpg" />
            <div class="accordion  faq_text" id="accordionExample">
              <div class="accordion-item border-light shadow">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button"style={{ fontFamily: "'Roboto', sans-serif" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  1. What kind of industries do you work with?
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body"style={{ fontFamily: "'Roboto', sans-serif" }}>
                    Yes, we offer custom software development services tailored to the specific needs of our clients. We work closely with our clients to understand their requirements and develop solutions that meet their unique needs
                  </div>
                </div>
              </div>
              <div class="accordion-item mt-4 border-light border-top shadow">
                <h2 class="accordion-header" id="headingTwo">
                  <button style={{ fontFamily: "'Roboto', sans-serif" }} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  2. How much does it cost to develop software?
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body" style={{ fontFamily: "'Roboto', sans-serif" }}>
                    Yes, we offer custom software development services tailored to the specific needs of our clients. We work closely with our clients to understand their requirements and develop solutions that meet their unique needs.
                  </div>
                </div>
              </div>
              <div class="accordion-item mt-4 border-light border-top shadow">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed"style={{ fontFamily: "'Roboto', sans-serif" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  3. How long does it take to develop software?
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div class="accordion-body"style={{ fontFamily: "'Roboto', sans-serif" }}>
                    Yes, we offer custom software development services tailored to the specific needs of our clients. We work closely with our clients to understand their requirements and develop solutions that meet their unique needs.
                  </div>
                </div>
              </div>
              <div class="accordion-item mt-4 border-light border-top shadow">
                <h2 class="accordion-header" id="headingfour">
                  <button class="accordion-button collapsed"style={{ fontFamily: "'Roboto', sans-serif" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                  4. Custom software development services ?
                  </button>
                </h2>
                <div id="collapsefour" class="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                  <div class="accordion-body"style={{ fontFamily: "'Roboto', sans-serif" }}>
                    Yes, we offer custom software development services tailored to the specific needs of our clients. We work closely with our clients to understand their requirements and develop solutions that meet their unique needs.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
