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
import Oil from './pages/Oil'
import Cart from './pages/Cart'

import { CartProvider } from './pages/CartContext' /*i imported this to wrap every components that will need cart*/

import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <CartProvider>
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
            <Route path='/Oil' element={<Oil/>}></Route>

        </Routes>
        <Cart />
      </Router>
    </CartProvider>
  )
  
}

export default App;
