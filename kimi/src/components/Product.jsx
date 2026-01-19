import React from "react";
import "./Product.css"
import Tyre from "../assets/tyre.png"

const Products = () => {
    return(
        <div className="product-container">
            <div className="first-page">
                <div className="tyre-discription">
                    <div className="first-description">
                        <h1>Premium Tyres <br />
                        from around the <br />
                        world here in Rwanda</h1>
                    </div>
                    <div className="second-description">
                        <p>Don't deny yourself a pleasure of <br /> 
                        driving your Car with best premium <br />
                        tyres from around the world.</p>
                    </div>
                    <div className="buy-button-container">
                        <button className="buy-button">Shop now</button>
                    </div>
                </div>

                <div className="tyre-image">
                    <img src={Tyre} alt="" />
                </div>
            </div>

            <div className="cars-icons">
                {/* <i class="fa-solid fa-gear"></i>
                <i class="fa-solid fa-gear"></i>
                <i class="fa-solid fa-gear"></i>
                <i class="fa-solid fa-gear"></i>
                <i class="fa-solid fa-gear"></i>
                <i class="fa-solid fa-gear"></i>
                <i class="fa-solid fa-gear"></i> */}
            </div>
        </div>
    )
}

export default Products;