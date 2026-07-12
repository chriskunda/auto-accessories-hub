
const Card = () => {
    return(
        <div className="card2">
                        <div className="rims-cards-img">
                            <img src="" alt="" className="rim-img" />
                        </div>
                        <div className="rim-carrd-descri">
                            <div className="card-top-row">
                                <h2 className="card-name">{rim.name}</h2>
                                <span className="card-price">{rim.price} <small>RWF</small></span>
                            </div>
                            <div className="card-specs">
                                <span className="spec-tag">Size: {rim.size}</span>
                                <span className="spec-tag">{rim.quantity}</span>
                            </div>
                            <div className="card-actions">
                                <button className="btn-cart">
                                    Add to Cart</button>
                                <button className="btn-wish">♡</button>
                            </div>
                        </div>
                    </div>
    )
}

export default Card