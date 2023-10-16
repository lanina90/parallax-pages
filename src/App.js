import './App.css';
import Hero from "./Components/Hero/Hero";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";

function App() {
  return (
    <div className='page-wrapper'>
      <Hero/>
      <Intro/>
      {/*<Content/>*/}
      <Footer/>
    </div>
  );
}

export default App;
