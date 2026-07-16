import './Newrims.css'
import Nav from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import {rims} from '../objects/rims'
import Card from '../components/Card'

import { useState } from 'react';

const Newrims = () => {

    const [show, setShow] = useState(true);
    
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
                    
                    {rims.map(rim =>(
                        <Card key={rim.id} rim={rim} />
                    ))}

                </div>

            </div>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Newrims;
