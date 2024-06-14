import React from 'react';
import './intro.css';
import bg from "../../../assets/bg_.png";
import { Link } from 'react-scroll';
import Resume from "../../../assets/resume/Rupesh_Resume.pdf";
import Ricon from "../../../assets/Resume.png"
import Typewriter from 'typewriter-effect';
import {Role} from "./role";
const Intro = () => {
    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = Resume;
      link.download = 'Rupesh_Resume.pdf'; 
      link.click();
    };
  
    return (
      <section id="intro">
        <div className="introContent">
          <span className='hello'>Hello,</span>
          <span className='introText'>
            I'am <span className='introName'>Rupesh</span><br />
            <span className='role'>
                <Typewriter options={{
                    strings:Role.roles,
                    autoStart:true,
                    loop:true,
                    delay: 50,
                    deleteSpeed: 20,
                }}></Typewriter>
              {/* <span className='role-item'>Frontend Engineer</span>
              <span className='role-item'>Full Stack Developer</span>
              <span className='role-item'>Software Tester</span> */}
            </span>
          </span>
          <p className="introPara">I am motivated and versatile individual, always eager to take <br />an new challenges. With a passion for learning I am dedicated  <br /> to delivering hight-quality results. With a positive attitude and  <br />a growth mindset, I am ready to amek a meaningful contribution   <br />and achieve great things.</p>
          <img src={bg} alt="profile" className="bg" />
         <Link> <button className='btn' onClick={handleDownload}><img src={Ricon} alt="resume" className='btnImg' />Get Resume</button></Link>
        </div>
      </section>
    )
  }
  
  export default Intro