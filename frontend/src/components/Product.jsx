import Lottie from "lottie-react";
import scrollDownAnimation from "../assets/scrolldown.json";
import "./Product.css"
import Tyre from "../assets/tyre.png"



const Products = () => {
    return(
        
        <div className="product-container">
                <div className="tyre-description">
                    <div className="first-description">
                        <h1>Premium Tyres from around the world and top-tier Services here in Rwanda.</h1>
                    </div>
                    <div className="second-description">
                        <p>Don't deny yourself a pleasure of 
                        driving a well-maintained car with premium tyres from around the world.</p>
                    </div>
                    <div className="buy-button-container">
                        <a className="buy-button" href="#services">Shop now</a>

                        {/* <Lottie className="scroll"
                            animationData= {scrollDownAnimation}
                            loop={true}
                            style={{ width: 60, height: 60 }}

                        /> */}

                        

                    </div>
                </div>

                {/* <div className="tyre-image">
                    <img src={Tyre} alt="" />
                </div> */}

        </div>
    )
}

export default Products;