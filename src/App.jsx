import './App.css'
import Navbar from './components/Navbar';
import Productos from './components/Productos';
import Mapa from './components/Mapa';
import Body from './components/Body';
import Footer from './components/Footer';
import Carousel from './components/Carousel';

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Body />
      <Productos />
      <Mapa />
      <Footer />
    </>
  )
}

export default App;
