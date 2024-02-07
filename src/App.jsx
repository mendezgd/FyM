import './App.css'
import Navbar from './components/Navbar';
import Productos from './components/Productos';
import Header from './components/Header';
import Mapa from './components/Mapa';
import Body from './components/Body';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Body />
      <Productos />
      <Mapa />
    </>
  )
}

export default App;
