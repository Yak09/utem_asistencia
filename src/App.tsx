import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Button from '@mui/material/Button';
import './App.css'
import './App.scss'
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Sidebar from './components/Sidebar';
import Generar from './pages/Generar';
import Escanear from './pages/Escanear';
import Config from './pages/Config';


function App() {
  return (
    <>
    <Router>
      <div className='flex'>
        <Sidebar/> 
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Perfil" element={<Perfil />} />
            <Route path="/Generar" element={<Generar />} />
            <Route path="/Escanear" element={<Escanear />} />
            <Route path="/Config" element={<Config />} />
          </Routes>
        </div>
      </div>
    </Router>
    <Button variant="contained">Hello world</Button>
  
    </>
  )
}

export default App;