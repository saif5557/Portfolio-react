import "./FooterStyles.css"
import React from 'react'
import {FaHome,FaPhone,FaMailBulk, FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                      <p>D-148 Alpha 1 Greater Noida Uttar Pradesh (201310)</p>
                      <p>India.</p>
                    </div>
                </div>
                <div className="phone">
                  <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                  +91-8887475145 </h4>
                </div>
                <div className="email">
                  <h4>
                    <FaMailBulk size={20} style={{color: "#fff",marginRight:"2rem"}} />
                    saifm5557@gmail.com , saifmohamm5@gmail.com
                  </h4>
                </div>
            </div>
            <div className="right">
              <h4>About the Portfolio</h4>
              <p>This is me Saif Mohammad. I have the good coding problem solving skills, and I have lot of knowladge about web develepment</p>
              <div className="social">
                <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                <FaGithub size={30} style={{color:"#fff",marginRight:"1rem"}}/>
              </div>
            </div>
        </div>
      
    </div>
  )
}

export default footer
