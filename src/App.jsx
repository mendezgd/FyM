import './App.css'
import Navbar from './components/Navbar';
import Productos from './components/Productos';
import Header from './components/Header';
import Mapa from './components/Mapa';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Body />
      <Productos />
      <Mapa />
      <Footer />
    </>
  )
}

export default App;
