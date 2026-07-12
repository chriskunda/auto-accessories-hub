import { useState } from 'react';
import './Oil.css'
import Nav from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Oil = () => {

    const [oils] = useState([
            {id:1, name: "Rymax", price: "8,000", work: "Engine oil", quantity:"One set"},
            {id:1, name: "Kixx Diesel", price: "12,000", work: "Engine oil", quantity:"Two sets"},
            {id:1, name: "Kixx Essence", price: "15,000", work: "Engine oil", quantity:"One set"}
        ])

    return (
        <div className='oil-parent'>
            <Nav/>

            {/* Hero */}
            <div className="oil-hero">
                <div className="oil-hero-bg" />
                <div className="oil-hero-circle" />
                <div className="oil-hero-circle2" />
                <span className="oil-badge">2025 Collection</span>
                <h1 className="oil-title">Change Oil</h1>
                <p className="oil-subtitle">
                    Good quality oils to make your car run well.
                </p>
            </div>

            <div className="sub-oil-parent">

                <div className="oil-cards">
                    {oils.map(oil =>(
                    <div className="oil-card">
                        <div className="oil-card-img">
                            <img src="" alt="" className="oil-img" />
                        </div>
                        <div className="oil-card-descri">
                            <div className="oil-card-top-row">
                                <h2 className="oil-card-name">{oil.name}</h2>
                                <span className="oil-card-price">{oil.price} <small>RWF</small></span>
                            </div>
                            <div className="oil-card-specs">
                                <span className="oil-spec-tag">{oil.work}</span>
                            </div>
                            <div className="oil-card-actions">
                                <button className="oil-btn-cart">Add to Cart</button>
                                <button className="oil-btn-wish">♡</button>
                            </div>
                        </div>
                    </div>
                    ))}

                </div>

            </div>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Oil;
