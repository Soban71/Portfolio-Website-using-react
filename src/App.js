
import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Protofoliopro from "./Components/Portfoliopro/protofoliopro"
import Testmonial from "./Components/Testmonial/Testmonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Intro></Intro>
    <Services />
    <Experience/>
    <Works />
   <Protofoliopro></Protofoliopro>
   <Testmonial />
   <Contact/>
   <Footer/>

    
    </div>
  );
}

export default App;
