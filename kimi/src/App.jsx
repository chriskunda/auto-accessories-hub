import Nav from './components/Header'
import Products from './components/Product'
import Offer from './components/Offer'
import Feature from './components/Features'
import Faq from './components/Faq'
import Contact from './components/Contact'
import './App.css'

function App() {

  return (
    <div className='parent-container'>
      <Nav/>
      <Products/>
      <Offer/>
      <Feature/>
      <Faq/>
      <Contact/>
    </div>
  )
}

export default App;
