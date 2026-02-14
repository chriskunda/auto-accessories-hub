import Nav from './components/Header'
import Products from './components/Product'
import Offer from './components/Offer'
import Feature from './components/Features'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'

import Newtyres from './pages/Newtyres'


import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route 
        path='/Home' element={
          <div className='parent-container'>
            <Nav/>
            <Products/>
            <Offer/>
            <Feature/>
            <Faq/>
            <Contact/>
            <Footer/>
          </div>
        }></Route>
        
        <Route path='/Newtyres' element={
          <div className='newtyres-page'>
          <Nav/>
          <Newtyres />
          <Footer/>
          </div>
          }></Route>

      </Routes>
    </Router>
  )
  
}

export default App;
