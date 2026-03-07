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
        
        <Route path='/Newtyres' element={
          <div className='newtyres-page'>
            <Nav/>
            <Newtyres />
            <Contact/>
            <Footer/>
          </div>
          }></Route>
          
          <Route path='/Rims' element={
            <div className='Rims-page'>
              <Nav/>
              <Newrims/>
              <Contact/>
              <Footer/>
            </div>
          }>

          </Route>

      </Routes>
    </Router>
  )
  
}

export default App;
