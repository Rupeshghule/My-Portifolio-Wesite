import React from 'react'
import "./skills.css";
import WebDesign from "../../assets/webDesign.png";
import FullStack from "../../assets/fullStack.png";
import AppDev from "../../assets/AppDev.png";


const Skills = () => {
  return (
    <section id='skills'>
      <span className='SkillTitle'>What I do ?</span>
      <span className='skillDesc'>I am a versatile developer with expertise in web design, full-stack development, app development, front-end development, and UI/UX design. I excel in creating dynamic, responsive, and user-friendly applications across various platforms.
        I am prodicient in HTML, CSS, JavaScript, React.js, MongoDB, MySQL, java as well as API testing software like Postman.
      </span>
      <div className='skillBars'>
        <div className='skillbar'>
          <img src={WebDesign} alt="WebDesign" className='skillBarImg' />
          <div className="skillBarText">
            <h2>Web Design and Development</h2>
            <p>I am a passionate website designer and developer with expertise in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React.js, and Next.js. I have built numerous projects, including e-commerce websites, restaurant menu cards, and weather apps. My skills extend to creating and integrating REST APIs, ensuring dynamic and responsive web applications.</p>
          </div>
        </div>
        <div className='skillbar'>
          <img src={FullStack} alt="FullStack" className='skillBarImg' />
          <div className="skillBarText">
            <h2>Full Stack Development</h2>
            <p>I am a dedicated full-stack developer with expertise in the MERN stack, Java, and MySQL. I have successfully developed various projects, including a health data privacy system, a chat application and a weather app. My skills encompass both front-end and back-end development, enabling me to create comprehensive and efficient solutions. I am committed to delivering high-quality, user-friendly applications that meet diverse client needs.</p>
          </div>
        </div>
        <div className='skillbar'>
          <img src={AppDev} alt="AppDev" className='skillBarImg' />
          <div className="skillBarText">
            <h2>Application Development</h2>
            <p>
              I am an app developer with expertise in React Native, specializing in creating dynamic and user-friendly mobile applications. My skills include building responsive and efficient apps that deliver seamless user experiences. I am committed to continuous learning and implementing best practices in mobile development. My projects reflect my dedication to quality and innovation in the app development field.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
