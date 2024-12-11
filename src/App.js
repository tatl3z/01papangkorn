import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './pages/Carousel';
import RoomTypes from './pages/RoomTypes';
import News from './pages/News';
import Reviews from './pages/Reviews';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Carousel />

      <RoomTypes />

      <News />

      <Reviews />

      <Footer />

    </div>
  );
}

export default App;
