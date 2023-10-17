import './App.css';
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Clients from "./Components/Clients/Clients";

function App() {
  return (
    <div className='page-wrapper'>
      <Hero/>
      <Intro/>
      <Services/>
      <Clients/>
      <Footer/>
    </div>
  );
}

export default App;
