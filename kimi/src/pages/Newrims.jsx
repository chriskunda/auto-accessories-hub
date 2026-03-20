import './Newrims.css'

import Nav from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Newrims = () => {
    return (
        <div className="rims-parent">
            <Nav/>

            {/* Hero */}
            <div className="rims-hero">
                <div className="rims-hero-bg" />
                <div className="rims-hero-circle" />
                <div className="rims-hero-circle2" />
                <span className="rims-badge">2025 Collection</span>
                <h1 className="rims-title">New Rims</h1>
                <p className="rims-subtitle">
                    Elevate your vehicle's profile with our latest collection of precision-engineered alloys.
                    Where high-end aesthetics meet the road, turning every drive into a statement of elegance.
                </p>
            </div>

            <div className="sub-rims-parent">

                <div className="rims-cards">

                    <div className="card2">
                        <div className="rims-cards-img">
                            <img src="" alt="" className="rim-img" />
                        </div>
                        <div className="rim-carrd-descri">
                            <div className="card-top-row">
                                <h2 className="card-name">Grey</h2>
                                <span className="card-price">1,200,000 <small>RWF</small></span>
                            </div>
                            <div className="card-specs">
                                <span className="spec-tag">Size: 19"</span>
                                <span className="spec-tag">One set</span>
                            </div>
                            <div className="card-actions">
                                <button className="btn-cart">Add to Cart</button>
                                <button className="btn-wish">♡</button>
                            </div>
                        </div>
                    </div>

                    <div className="card2">
                        <div className="rims-cards-img">
                            <img src="" alt="" className="rim-img" />
                        </div>
                        <div className="rim-carrd-descri">
                            <div className="card-top-row">
                                <h2 className="card-name">Grey</h2>
                                <span className="card-price">1,200,000 <small>RWF</small></span>
                            </div>
                            <div className="card-specs">
                                <span className="spec-tag">Size: 19"</span>
                                <span className="spec-tag">One set</span>
                            </div>
                            <div className="card-actions">
                                <button className="btn-cart">Add to Cart</button>
                                <button className="btn-wish">♡</button>
                            </div>
                        </div>
                    </div>

                    <div className="card2">
                        <div className="rims-cards-img">
                            <img src="" alt="" className="rim-img" />
                        </div>
                        <div className="rim-carrd-descri">
                            <div className="card-top-row">
                                <h2 className="card-name">Grey</h2>
                                <span className="card-price">1,200,000 <small>RWF</small></span>
                            </div>
                            <div className="card-specs">
                                <span className="spec-tag">Size: 19"</span>
                                <span className="spec-tag">One set</span>
                            </div>
                            <div className="card-actions">
                                <button className="btn-cart">Add to Cart</button>
                                <button className="btn-wish">♡</button>
                            </div>
                        </div>
                    </div>

                    <div className="card2">
                        <div className="rims-cards-img">
                            <img src="" alt="" className="rim-img" />
                        </div>
                        <div className="rim-carrd-descri">
                            <div className="card-top-row">
                                <h2 className="card-name">Grey</h2>
                                <span className="card-price">1,200,000 <small>RWF</small></span>
                            </div>
                            <div className="card-specs">
                                <span className="spec-tag">Size: 19"</span>
                                <span className="spec-tag">One set</span>
                            </div>
                            <div className="card-actions">
                                <button className="btn-cart">Add to Cart</button>
                                <button className="btn-wish">♡</button>
                            </div>
                        </div>
                    </div>

                    <div className="card2">
                        <div className="rims-cards-img">
                            <img src="" alt="" className="rim-img" />
                        </div>
                        <div className="rim-carrd-descri">
                            <div className="card-top-row">
                                <h2 className="card-name">Grey</h2>
                                <span className="card-price">1,200,000 <small>RWF</small></span>
                            </div>
                            <div className="card-specs">
                                <span className="spec-tag">Size: 19"</span>
                                <span className="spec-tag">One set</span>
                            </div>
                            <div className="card-actions">
                                <button className="btn-cart">Add to Cart</button>
                                <button className="btn-wish">♡</button>
                            </div>
                        </div>
                    </div>

                    <div className="card2">
                        <div className="rims-cards-img">
                            <img src="" alt="" className="rim-img" />
                        </div>
                        <div className="rim-carrd-descri">
                            <div className="card-top-row">
                                <h2 className="card-name">Grey</h2>
                                <span className="card-price">1,200,000 <small>RWF</small></span>
                            </div>
                            <div className="card-specs">
                                <span className="spec-tag">Size: 19"</span>
                                <span className="spec-tag">One set</span>
                            </div>
                            <div className="card-actions">
                                <button className="btn-cart">Add to Cart</button>
                                <button className="btn-wish">♡</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Newrims;
