import './App.css'
import Navbar from './components/Navbar';
import Formulario from './components/Formulario';
import Productos from './components/Productos';
import Header from './components/Header';
import Card from './components/Card';
import Mapa from './components/Mapa';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Card />
      <Formulario />
      <Productos />
      {/* <Mapa /> */}
    </>
  )
}

export default App;
