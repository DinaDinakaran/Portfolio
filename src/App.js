import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Qualification from "./components/qualification/Qualification";
import Scroll from "./components/scroll/Scroll";
import Service from "./components/service/Service";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";

function App() {
  return (
    < >
      <Header />

      <main className="main">
        <Home />
        <About/>  
        <Skills/>
        <Service/>
        <Qualification/>
        <Work/>
        <Contact/>
      </main>
      <Footer/>
      <Scroll/>
    </>
  );
}

export default App;
