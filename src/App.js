import './App.css';
import Hero from "./Components/Hero/Hero";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className='page-wrapper'>
      <Hero/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
