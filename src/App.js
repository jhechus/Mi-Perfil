import About from "./components/about";
import Contacto from "./components/contact";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Skills from "./components/skills";


function App() {
  return (
    <div >
      <Navbar/>
      <Home/> 
      <About/>
      <Skills/>
      <Contacto/>
    </div>
  );
}

export default App;
