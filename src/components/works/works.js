import React from 'react';
import "./works.css";
import Weatherapp from "../../assets/weather.png";
import Ecom from "../../assets/Ecommerce.jpg";
import Chat from "../../assets/LetsTalk.png";

const Works = () => {
  return (
    <section id='works'>
      <h2 className='workstitle'>My Portfolio</h2>
      <span className='workdesc'></span>
      <div className="workings">
        <div className="worksImgContainer">
          <div className="worksImgWrapper">
            <img src={Chat} alt="" className='worksImg' />
            <div className='desc'>
              <div className="text">Let's Talk Chat App is real-time communication using MERN Stack with Socket.io.  <br /><br />
                
                 <a href="https://lets-talk-chat-app.onrender.com/"> Go to App</a></div>
            </div>
          </div>
        </div>
        <div className="worksImgContainer">
          <div className="worksImgWrapper">
            <img src={Ecom} alt="" className='worksImg' />
            <div className='desc'>
              <div className="text">A dynamic e-commerce site with HTML, CSS, and JavaScript, featuring API integration for real-time data and a seamless user experience</div>
            </div>
          </div>
        </div>
        <div className="worksImgContainer">
          <div className="worksImgWrapper">
            <img src={Weatherapp} alt="" className='worksImg' />
            <div className='desc'>
              <div className="text"> Weather app using API integration to provide real-time weather updates with a sleek, user-friendly interface.</div>
            </div>
          </div>
        </div>
      </div>
      <button className='workBtn'>See More</button>
    </section>
  )
}

export default Works;