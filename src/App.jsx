import './App.css'
import Navbar from './components/Navbar';
import Formulario from './components/Formulario';
import Productos from './components/Productos';
import Carousel from './components/Carousel';
import Header from './components/Header';

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Formulario />
      <Header />
      <Productos />
    </>
  )
}

export default App;
