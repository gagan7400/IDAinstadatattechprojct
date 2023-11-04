import React from 'react'
function Teammembers() {
  return (
    <>
      <div className='team-main'>

        <div className="team-top">
          <div className="sections slides">
            <div className="btn-team slide Slide-right" style={{ marginLeft: "501px" }}>Our Team Members</div>
          </div>
        </div>



        <div className='team-title'>
          <h2 class="proteam-title">
            Meet Our Team
          </h2>
          <p class="team-para">Data transfer capacity has generally been inconsistent dispersed around the world, with expanding<p style={{ marginLeft: "145px" }}>focus in the advanced age just 10 nations have facilitated.</p></p>
        </div>

        {/* cards  */}
        <div className='allteam-cards' style={{ backgroundColor: "orange", display: "flex" }}>
          <div className="card-team team-card" style={{ position: 'absolute', marginLeft: "113px" }}>
            <div class="team-item__thumb" >
              <img src="https://www.instadatatech.com/assets/images/frontend/team_member/64226f678a0ab1679978343.png" alt="team member" style={{ borderRadius: "10px" }} />
            </div>
            <div class="team-name">
              <h3 style={{ fontWeight: "700", margin: "7px 18px", width: "100%", fontSize: "23px" }}>Frank Khalid</h3>
              <span style={{ margin: "-7px 36px", position: "absolute", color: '0a1233', fontSize: "16px", fontWeight: "500" }}>HR Manager</span>
            </div>
            <div className='color-team'>
              <ul class="Links-team" style={{ display: "flex" }}>
                <li style={{ position: "relative", fontWeight: "900", fontSize: "20px", backgroundColor: "rgb(30, 149, 234)", width: "45px", borderRadius: "5px", height: "37px", justifyContent: "center", display: "flex", alignItems: "center", color: "white" }}>
                  <i class="fas fa-envelope"></i></li>

                <li class="share__icon" style={{ marginLeft: " 12px", position: "relative", fontWeight: "900", fontSize: "20px", backgroundColor: "rgb(30, 149, 234)", width: "45px", borderRadius: "5px", height: "37px", color: "white", paddingTop: "4px", paddingLeft: "8px", }}>
                  <i class="fas fa-share-alt"></i>
                  <ul class="social-team">
                    <li class="social-list-item" style={{ position: "relative", fontWeight: "900", fontSize: "20px", backgroundColor: "rgb(30, 149, 234)", width: "45px", borderRadius: "5px", height: "37px", color: "white", paddingTop: "4px", paddingLeft: "8px", marginTop: "6px" }}><i class="fab fa-facebook-f"></i></li>
                    <li class="social-list-item" style={{ position: "relative", fontWeight: "900", fontSize: "20px", backgroundColor: "rgb(30, 149, 234)", width: "45px", borderRadius: "5px", height: "37px", color: "white", paddingTop: "4px", paddingLeft: "8px", marginTop: "6px" }}><i class="fab fa-twitter"></i></li>
                    <li class="social-list-item" style={{ position: "relative", fontWeight: "900", fontSize: "20px", backgroundColor: "rgb(30, 149, 234)", width: "45px", borderRadius: "5px", height: "37px", color: "white", paddingTop: "4px", paddingLeft: "8px", marginTop: "6px" }}><i class="fab fa-instagram"></i></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="card-team product-card" style={{ position: 'absolute', marginLeft: "373px" }}>
            <div class="team-item__thumb" >
              <img src="https://www.instadatatech.com/assets/images/frontend/team_member/64226f1f3bffa1679978271.png" alt="team member" style={{ borderRadius: "10px" }} />
            </div>
            <div class="team-name">
              <h3 style={{ fontWeight: "700", margin: "5px 5px", width: "100%", fontSize: "23px" }}>Lamar Jackson</h3>
              <span style={{ margin: "-7px 69px", position: "absolute", color: '0a1233', fontSize: "16px", fontWeight: "500" }}>CEO</span>
            </div>
            <div className='color-team'>
              <ul class="Links-team" style={{ display: "flex" }}>
                <li style={{ position: "relative", fontWeight: "900", fontSize: "20px", backgroundColor: "rgb(30, 149, 234)", width: "45px", borderRadius: "5px", height: "37px", justifyContent: "center", display: "flex", alignItems: "center", color: "white" }}>
                  <i class="fas fa-envelope"></i></li>

                <li class="share__icon" style={{ marginLeft: " 12px", position: "relative", fontWeight: "900", fontSize: "20px", backgroundColor: "rgb(30, 149, 234)", width: "45px", borderRadius: "5px", height: "37px", color: "white", paddingTop: "4px", paddingLeft: "8px", }}>
                  <i class="fas fa-share-alt"></i>
                  <ul class="social-team">
                    <li class="social-list-item" style={{ position: "relative", fontWeight: "900", fontSize: "20px", backgroundColor: "rgb(30, 149, 234)", width: "45px", borderRadius: "5px", height: "37px", color: "white", paddingTop: "4px", paddingLeft: "8px", marginTop: "6px" }}><i class="fab fa-facebook-f"></i></li>
                    <li class="social-list-item" style={{ position: "relative", fontWeight: "900", fontSize: "20px", backgroundColor: "rgb(30, 149, 234)", width: "45px", borderRadius: "5px", height: "37px", color: "white", paddingTop: "4px", paddingLeft: "8px", marginTop: "6px" }}><i class="fab fa-twitter"></i></li>
                    <li class="social-list-item" style={{ position: "relative", fontWeight: "900", fontSize: "20px", backgroundColor: "rgb(30, 149, 234)", width: "45px", borderRadius: "5px", height: "37px", color: "white", paddingTop: "4px", paddingLeft: "8px", marginTop: "6px" }}><i class="fab fa-instagram"></i></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="card-team product-card" style={{ position: 'absolute', marginLeft: "636px" }}>
            <div class="team-item__thumb" >
              <img src="https://www.instadatatech.com/assets/images/frontend/team_member/64226ec84dddc1679978184.png" alt="team member" style={{ borderRadius: "10px" }} />
            </div>
            <div class="team-name">
              <h3 style={{ fontWeight: "700", margin: "7px  35px", width: "100%", fontSize: "23px" }}>John Doe</h3>
              <span style={{ margin: "-7px 27px", position: "absolute", color: '0a1233', fontSize: "16px", fontWeight: "500" }}>Senior Developer</span>
            </div>
            <div className='color-team'>
              <ul class="Links-team" style={{ display: "flex" }}>
                <li style={{ position: "relative", fontWeight: "900", fontSize: "20px", backgroundColor: "rgb(30, 149, 234)", width: "45px", borderRadius: "5px", height: "37px", justifyContent: "center", display: "flex", alignItems: "center", color: "white" }}>
                  <i class="fas fa-envelope"></i></li>

                <li class="share__icon" style={{ marginLeft: " 12px", position: "relative", fontWeight: "900", fontSize: "20px", backgroundColor: "rgb(30, 149, 234)", width: "45px", borderRadius: "5px", height: "37px", color: "white", paddingTop: "4px", paddingLeft: "8px", }}>
                  <i class="fas fa-share-alt"></i>
                  <ul class="social-team">
                    <li class="social-list-item" style={{ position: "relative", fontWeight: "900", fontSize: "20px", backgroundColor: "rgb(30, 149, 234)", width: "45px", borderRadius: "5px", height: "37px", color: "white", paddingTop: "4px", paddingLeft: "8px", marginTop: "6px" }}><i class="fab fa-facebook-f"></i></li>
                    <li class="social-list-item" style={{ position: "relative", fontWeight: "900", fontSize: "20px", backgroundColor: "rgb(30, 149, 234)", width: "45px", borderRadius: "5px", height: "37px", color: "white", paddingTop: "4px", paddingLeft: "8px", marginTop: "6px" }}><i class="fab fa-twitter"></i></li>
                    <li class="social-list-item" style={{ position: "relative", fontWeight: "900", fontSize: "20px", backgroundColor: "rgb(30, 149, 234)", width: "45px", borderRadius: "5px", height: "37px", color: "white", paddingTop: "4px", paddingLeft: "8px", marginTop: "6px" }}><i class="fab fa-instagram"></i></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="card-team product-card" style={{ position: 'absolute', marginLeft: "893px" }}>
            <div class="team-item__thumb" >
              <img src="https://www.instadatatech.com/assets/images/frontend/team_member/64226e6bb53f61679978091.png" alt="team member" style={{ borderRadius: "10px" }} />
            </div>
            <div class="team-name">
              <h3 style={{ fontWeight: "700", margin: "7px 18px", width: "100%", fontSize: "21px" }}>
                Leslie Alexander
              </h3>
              <span style={{ margin: "-7px 36px", position: "absolute", color: '0a1233', fontSize: "16px", fontWeight: "500" }}>HR Manager</span>
            </div>
            <div className='color-team'>
              <ul class="Links-team" style={{ display: "flex" }}>
                <li style={{ position: "relative", fontWeight: "900", fontSize: "20px", backgroundColor: "rgb(30, 149, 234)", width: "45px", borderRadius: "5px", height: "37px", justifyContent: "center", display: "flex", alignItems: "center", color: "white" }}>
                  <i class="fas fa-envelope"></i></li>

                <li class="share__icon" style={{ marginLeft: " 12px", position: "relative", fontWeight: "900", fontSize: "20px", backgroundColor: "rgb(30, 149, 234)", width: "45px", borderRadius: "5px", height: "37px", color: "white", paddingTop: "4px", paddingLeft: "8px", }}>
                  <i class="fas fa-share-alt"></i>
                  <ul class="social-team">
                    <li class="social-list-item" style={{ position: "relative", fontWeight: "900", fontSize: "20px", backgroundColor: "rgb(30, 149, 234)", width: "45px", borderRadius: "5px", height: "37px", color: "white", paddingTop: "4px", paddingLeft: "8px", marginTop: "6px" }}><i class="fab fa-facebook-f"></i></li>
                    <li class="social-list-item" style={{ position: "relative", fontWeight: "900", fontSize: "20px", backgroundColor: "rgb(30, 149, 234)", width: "45px", borderRadius: "5px", height: "37px", color: "white", paddingTop: "4px", paddingLeft: "8px", marginTop: "6px" }}><i class="fab fa-twitter"></i></li>
                    <li class="social-list-item" style={{ position: "relative", fontWeight: "900", fontSize: "20px", backgroundColor: "rgb(30, 149, 234)", width: "45px", borderRadius: "5px", height: "37px", color: "white", paddingTop: "4px", paddingLeft: "8px", marginTop: "6px" }}><i class="fab fa-instagram"></i></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

        </div>


      </div>
    </>
  )
}

export default Teammembers
