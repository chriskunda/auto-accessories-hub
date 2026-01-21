import './Offer.css'
import New from '../assets/newtyres.webp'
import Used from '../assets/usedtyres.jpg'
import Pencage from '../assets/pencage.jpg'
import Oil from '../assets/oilchange.jpg'
import Rims from '../assets/newrims.webp'
import Accessories from '../assets/accessories.jpg'


const Offer = () => {
    return(
        <div className="parent-offer">
            <div className="offer-words">
                <h1 className='offer-words-h1'>What we Offer</h1>
                <p>Here is a varity of products and services we provide to our clients</p>
            </div>
            <div className="offer-cards">

                    <div className="item-card">
                            
                        <div className='card-foto'>
                        <img src={Used} alt="" />
                        </div>
                        <div className='card-description'>
                            <h1>Used tyres</h1>
                            <p>Inspected used tyres for safe driving</p>
                            <button className='card-description-button'>View items</button>
                        </div>

                    </div>


                    <div className="item-card">
                        <div className='card-foto'>
                            <img src={New} alt="" />
                        </div>
                        <div className='card-description'>
                            <h1>New tyres</h1>
                            <p>Quality new tyres you can trust.</p>
                            <button className='card-description-button'>View items</button>
                        </div>
                    </div>


                    <div className="item-card">
                        <div className='card-foto'>
                            <img src={Rims} alt="" />
                        </div>
                        <div className='card-description'>
                            <h1>New Rims</h1>
                            <p>A global collection of rims in every size and style</p>
                            <button className='card-description-button'>View items</button>
                        </div>
                    </div>

                    <div className="item-card">
                        <div className='card-foto'>
                            <img src={Pencage} alt="" />
                        </div>
                        <div className='card-description'>
                            <h1>Wheel allignment</h1>
                            <p>Wheel alignment for better handling and tyre life</p>
                            <button className='card-description-button'>View items</button>
                        </div>
                    </div>


                    <div className="item-card">
                        <div className='card-foto'>
                            <img src={Oil} alt="" />
                        </div>
                        <div className='card-description'>
                            <h1>Oil change</h1>
                            <p>Fresh oil. Better performance. Longer engine life.</p>
                            <button className='card-description-button'>View items</button>
                        </div>
                    </div>

                    <div className="item-card">
                        <div className='card-foto'>
                            <img src={Accessories} alt="" />
                        </div>
                        <div className='card-description'>
                            <h1>Accessories</h1>
                            <p>Key accessories for car maintenance</p>
                            <button className='card-description-button'>View items</button>
                        </div>
                    </div>

            </div>
        </div>
    )
}

export default Offer;