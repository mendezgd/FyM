import './App.css'
/* import AnimateOnScroll from './components/AnimateOnScroll'; */
import Header from './components/Header';
import Navbar from './components/Navbar';
import Formulario from './components/Formulario';
import GoogleMap from './components/GoogleMap';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Formulario />
      <GoogleMap />
      {/* <AnimateOnScroll /> */}
    </>
  )
}

export default App;
