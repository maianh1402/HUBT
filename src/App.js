
import './App.css';
import About from './components/container/about/About';
import Map from './components/container/map/Map';
import NicePlace from './components/container/nicePlace/NicePlace';
import Review from './components/container/review/Review';
import Tour from './components/container/tour/Tour';
import Footer from './components/footer/Footer';
import Header from "./components/header/Header";

function App() {
  return (
    <div>
    <Header/>
    <NicePlace/>
    <About/>
    <Tour/>
    <Review/>
    <Map/>
    <Footer/>
    </div>
  );
}

export default App;
