import './App.css';
import Navbar from './components/homepage/js/Navbar';
import CoverSection from './components/homepage/js/CoverSection';
import Info from './components/homepage/js/Info';
import Cards from './components/homepage/js/Cards';
import Footer from './components/homepage/js/Footer';


function App() {
  return (
    <div className="App">
     <Navbar />
     <CoverSection />
     <Info />
     <Cards />
     <Footer />
    </div>
  );
}

export default App;
