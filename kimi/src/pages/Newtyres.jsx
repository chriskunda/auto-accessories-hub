import { useState } from 'react'    
import './Newtyres.css'
import Nav from '../components/Header'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Newtyres = () => {

    const [tyres, setTyres] = useState([
        {id:1, name: "MG Stone", size: 185/70/14, quantity: 18, price: 80000}
    ])
    return (
        <div className="tyres-parent">
            <Nav/>

            {/* Hero */}
            <div className="tyres-hero">
                <div className="tyres-hero-bg" />
                <div className="tyres-hero-circle" />
                <div className="tyres-hero-circle2" />
                <span className="tyres-badge">2025 Collection</span>
                <h1 className="tyres-title">NEW TYRES</h1>
                <p className="tyres-subtitle">
                    Below there is variety of brands of the new tyres we provide. Take a look and add to cart whichever you would like to purchase.
                </p>
            </div>

            <div className="sub-tyres-parent">

                <div className="tyres-cards">

                    {tyres.map(tyre =>(
                    <div className="tyre-card">
                        <div className="tyres-cards-img">
                            <img src="" alt="" className="tyre-img" />
                        </div>
                        <div className="tyre-carrd-descri">
                            <div className="tyre-card-top-row">
                                <h2 className="tyre-card-name">{tyre.name}</h2>
                                <span className="tyre-card-price">{tyre.price} <small>RWF</small></span>
                            </div>
                            <div className="tyre-card-specs">
                                <span className="tyre-spec-tag">Size: {tyre.size}</span>
                                <span className="tyre-spec-tag">Qty: {tyre.quantity}</span>
                            </div>
                            <div className="tyre-card-actions">
                                <button className="tyre-btn-cart">Add to Cart</button>
                                <button className="tyre-btn-wish">♡</button>
                            </div>
                        </div>
                    </div>
                        ))}
{/*                         
                    <div className="tyre-card">
                        <div className="tyres-cards-img">
                            <img src="" alt="" className="tyre-img" />
                        </div>
                        <div className="tyre-carrd-descri">
                            <div className="tyre-card-top-row">
                                <h2 className="tyre-card-name">Dunlop</h2>
                                <span className="tyre-card-price">120,000 <small>RWF</small></span>
                            </div>
                            <div className="tyre-card-specs">
                                <span className="tyre-spec-tag">Size: 275/50/19</span>
                                <span className="tyre-spec-tag">Qty: 8</span>
                            </div>
                            <div className="tyre-card-actions">
                                <button className="tyre-btn-cart">Add to Cart</button>
                                <button className="tyre-btn-wish">♡</button>
                            </div>
                        </div>
                    </div>

                    <div className="tyre-card">
                        <div className="tyres-cards-img">
                            <img src="" alt="" className="tyre-img" />
                        </div>
                        <div className="tyre-carrd-descri">
                            <div className="tyre-card-top-row">
                                <h2 className="tyre-card-name">Bridgestone</h2>
                                <span className="tyre-card-price">120,000 <small>RWF</small></span>
                            </div>
                            <div className="tyre-card-specs">
                                <span className="tyre-spec-tag">Size: 275/50/19</span>
                                <span className="tyre-spec-tag">Qty: 8</span>
                            </div>
                            <div className="tyre-card-actions">
                                <button className="tyre-btn-cart">Add to Cart</button>
                                <button className="tyre-btn-wish">♡</button>
                            </div>
                        </div>
                    </div>

                    <div className="tyre-card">
                        <div className="tyres-cards-img">
                            <img src="" alt="" className="tyre-img" />
                        </div>
                        <div className="tyre-carrd-descri">
                            <div className="tyre-card-top-row">
                                <h2 className="tyre-card-name">Road Stone</h2>
                                <span className="tyre-card-price">120,000 <small>RWF</small></span>
                            </div>
                            <div className="tyre-card-specs">
                                <span className="tyre-spec-tag">Size: 275/50/19</span>
                                <span className="tyre-spec-tag">Qty: 8</span>
                            </div>
                            <div className="tyre-card-actions">
                                <button className="tyre-btn-cart">Add to Cart</button>
                                <button className="tyre-btn-wish">♡</button>
                            </div>
                        </div>
                    </div>

                    <div className="tyre-card">
                        <div className="tyres-cards-img">
                            <img src="" alt="" className="tyre-img" />
                        </div>
                        <div className="tyre-carrd-descri">
                            <div className="tyre-card-top-row">
                                <h2 className="tyre-card-name">Yokohama</h2>
                                <span className="tyre-card-price">120,000 <small>RWF</small></span>
                            </div>
                            <div className="tyre-card-specs">
                                <span className="tyre-spec-tag">Size: 275/50/19</span>
                                <span className="tyre-spec-tag">Qty: 8</span>
                            </div>
                            <div className="tyre-card-actions">
                                <button className="tyre-btn-cart">Add to Cart</button>
                                <button className="tyre-btn-wish">♡</button>
                            </div>
                        </div>
                    </div>

                    <div className="tyre-card">
                        <div className="tyres-cards-img">
                            <img src="" alt="" className="tyre-img" />
                        </div>
                        <div className="tyre-carrd-descri">
                            <div className="tyre-card-top-row">
                                <h2 className="tyre-card-name">Chao Yang</h2>
                                <span className="tyre-card-price">120,000 <small>RWF</small></span>
                            </div>
                            <div className="tyre-card-specs">
                                <span className="tyre-spec-tag">Size: 275/50/19</span>
                                <span className="tyre-spec-tag">Qty: 8</span>
                            </div>
                            <div className="tyre-card-actions">
                                <button className="tyre-btn-cart">Add to Cart</button>
                                <button className="tyre-btn-wish">♡</button>
                            </div>
                        </div>
                    </div> */}

                </div>

            </div>

            <Contact/>
            <Footer/>
        </div>
    )
}

export default Newtyres;
