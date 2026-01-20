import Nav from './components/Header'
import Products from './components/Product'
import Offer from './components/Offer'
import './App.css'

function App() {

  return (
    <div className='parent-container'>
      <Nav/>
      <Products/>
      <Offer/>
    </div>
  )
}

export default App;
