import { Routes, Route } from 'react-router-dom';

import NavigationBar from './components/NavigationBar/NavigationBar';
import NavigationBarSmallScreen from './components/NavigationBarSmallScreen/NavigationBarSmallScreen';
import HomePage from './pages/Home-Page/HomePage';
import AboutDeGiosa from './pages/AboutDeGiosa/AboutDeGiosa';
import MaReLand from './pages/MaReLand/MaReLand';
import Reclamations from './pages/Reclamations/Reclamations';

import Footer from './components/Footer/Footer';

import './style/App.scss';
import { useEffect, useState } from 'react';

function App() {
  const [smallScreenView, setSmallScreenView] = useState('Regular')
  const handleResize = () => {
    window.innerWidth < 768 ? setSmallScreenView('SmallScreen') : setSmallScreenView('Regular')
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => { 
      window.removeEventListener('resize', handleResize)
    }
  },[])

  return (
    <div className="App">
      {
        smallScreenView === 'Regular'
        ?
        <NavigationBar/>
        :
        <NavigationBarSmallScreen/>
      }
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutDeGiosa />} />
        <Route path="/MaReLand" element={<MaReLand />} />
        <Route path="/Publications" element={<Reclamations />} />
      </Routes>

      <Footer/>
    </div>
  )
}

export default App
