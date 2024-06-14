import Intro from "./components/Navbar/Intro/intro";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/footer/Footer";
import Contact from "./components/form/contact";
import Skills from "./components/skills/skills";
import Works from "./components/works/works";

function App() {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
