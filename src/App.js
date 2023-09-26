import './sass/pages/App.scss';
import Header from './components/header/Header.js'

import {Routes, Route} from 'react-router-dom';
import DonacionPage from './pages/Donacion/DonacionPage';
import HomePage from './pages/HomePage';
import Ecommerce from './pages/Ecommerce/Ecommerce';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/footer/Footer.js'
import QuienesSomosComplet from './components/Informacion/QuienesSomosComplet';



function App() {
  return (
    
     <div className="App">
        <Header />
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/donacion" element={<DonacionPage />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/quienessomos" element={<QuienesSomosComplet />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <div className='iconos'>
        <input type='checkbox' id="btn-mas">
        </input>
        <div className='iconosSecundarios'>
          <a href="/" className='iconoUnid'>
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a href="/" className='iconoUnid'>
            <ion-icon name="logo-youtube"></ion-icon>
          </a>
          <a href="/" className='iconoUnid'>
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a href="/" className='iconoUnid'>
          </a>
        </div>
        <label className='iconoUnid1' for='btn-mas'>
            <ion-icon name="add-outline"></ion-icon>        
        </label>
        
        </div>
        <Footer />



      </div>
    
     
  );
}

export default App;
