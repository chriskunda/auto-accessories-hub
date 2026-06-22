import{useState} from 'react'
import './Accessories.css'
import Nav from '../components/Header'
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Accessories = () => {
    const [accessories] = useState([
        {id:1, name: "Plas Chamois", price: "5,000", work: "Cleaning", quantity:"One set"},
        {id:1, name: "Coolant", price: "6,000", work: "Engine Care", quantity:"Two sets"},
        {id:1, name: "Car Perfume", price: "5,000", work: "Detailing", quantity:"One set"}
    ])

    return (
        <div className='Accessories-parent'>
            <Nav/>
            {/* Hero */}
            <div className="accessories-hero">
                <div className="accessories-hero-bg" />
                <div className="accessories-hero-circle" />
                <div className="accessories-hero-circle2" />
                <span className="accessories-badge">2025 Collection</span>
                <h1 className="accessories-title">Accessories</h1>
                <p className="accessories-subtitle">
                    A variety of accessories to make your car function well.
                </p>
            </div>

            <div className="sub-accessories-parent">

                <div className="accessories-cards">
                    {accessories.map(accessory =>(
                    <div className="accessory-card">
                        <div className="accessory-card-img">
                            <img src="" alt="" className="accessory-img" />
                        </div>
                        <div className="accessory-card-descri">
                            <div className="accessory-card-top-row">
                                <h2 className="accessory-card-name">{accessory.name}</h2>
                                <span className="accessory-card-price">{accessory.price} <small>RWF</small></span>
                            </div>
                            <div className="accessory-card-specs">
                                <span className="accessory-spec-tag">{accessory.work}</span>
                            </div>
                            <div className="accessory-card-actions">
                                <button className="accessory-btn-cart">Add to Cart</button>
                                <button className="accessory-btn-wish">♡</button>
                            </div>
                        </div>
                    </div>
                        ))}
                    {}

                    {/* <div className="accessory-card">
                        <div className="accessory-card-img">
                            <img src="" alt="" className="accessory-img" />
                        </div>
                        <div className="accessory-card-descri">
                            <div className="accessory-card-top-row">
                                <h2 className="accessory-card-name">Perfume</h2>
                                <span className="accessory-card-price">— <small>RWF</small></span>
                            </div>
                            <div className="accessory-card-specs">
                                <span className="accessory-spec-tag">Interior</span>
                            </div>
                            <div className="accessory-card-actions">
                                <button className="accessory-btn-cart">Add to Cart</button>
                                <button className="accessory-btn-wish">♡</button>
                            </div>
                        </div>
                    </div>

                    <div className="accessory-card">
                        <div className="accessory-card-img">
                            <img src="" alt="" className="accessory-img" />
                        </div>
                        <div className="accessory-card-descri">
                            <div className="accessory-card-top-row">
                                <h2 className="accessory-card-name">Jerk</h2>
                                <span className="accessory-card-price">— <small>RWF</small></span>
                            </div>
                            <div className="accessory-card-specs">
                                <span className="accessory-spec-tag">Tools</span>
                            </div>
                            <div className="accessory-card-actions">
                                <button className="accessory-btn-cart">Add to Cart</button>
                                <button className="accessory-btn-wish">♡</button>
                            </div>
                        </div>
                    </div>

                    <div className="accessory-card">
                        <div className="accessory-card-img">
                            <img src="" alt="" className="accessory-img" />
                        </div>
                        <div className="accessory-card-descri">
                            <div className="accessory-card-top-row">
                                <h2 className="accessory-card-name">Husi</h2>
                                <span className="accessory-card-price">— <small>RWF</small></span>
                            </div>
                            <div className="accessory-card-specs">
                                <span className="accessory-spec-tag">Tools</span>
                            </div>
                            <div className="accessory-card-actions">
                                <button className="accessory-btn-cart">Add to Cart</button>
                                <button className="accessory-btn-wish">♡</button>
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

export default Accessories;
