import NavBar from "./Components/NavBar"
import Home from "./Pages/Home";
import About from "./Pages/AboutMe";
import Projects from "./Pages/Projects";
import Contact from "./Pages/ContactMe";
import {Route, Routes} from 'react-router-dom'
import AboutMe from "./Pages/AboutMe";
import ContactMe from "./Pages/ContactMe";

function App() {
  return (
    <>
      <NavBar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contactme" element={<ContactMe />} />
        </Routes>
      </div>
    </>
    ) 
}

export default App;
