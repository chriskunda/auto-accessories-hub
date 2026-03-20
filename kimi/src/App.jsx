// Scroll to top
import ScrollToTop from './components/ScrollTotop'

// Components
import Nav from './components/Header'
import Products from './components/Product'
import Offer from './components/Offer'
import Feature from './components/Features'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Pages
import Newtyres from './pages/Newtyres'
import Newrims from './pages/Newrims'
import Accessories from './pages/Accessories'


import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route 
        path='/' element={
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
        
        <Route path='/Newtyres' element={<Newtyres />}></Route>          
        <Route path='/Rims' element={<Newrims/>}></Route>
        <Route path='/Accessories' element={<Accessories/>}></Route>


      </Routes>
    </Router>
  )
  
}

export default App;
