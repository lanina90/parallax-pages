import './App.css';
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div className='page-wrapper'>
      <Hero/>
      <Intro/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
