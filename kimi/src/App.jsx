// Scroll to top
import ScrollToTop from './components/ScrollToTop'

// Components
import Mainnav from './components/Mainheader'
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
import Oil from './pages/Oil'
import Cart from './pages/Cart'

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
                <Mainnav/>
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
            <Route path='/Oil' element={<Oil/>}></Route>

        </Routes>
        <Cart />
      </Router>
    
  )
  
}

export default App;
