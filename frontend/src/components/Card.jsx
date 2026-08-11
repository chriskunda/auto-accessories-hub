import { useCart } from '../context/CartContext'

const Card = ({ rim }) => {
    const { addToCart } = useCart();

    if (!rim) return null;

    const handleAddToCart = () => {
        // Create cart item from rim data
        const cartItem = {
            id: `rim-${rim.id}` || Math.random(), // Fallback to random if no id
            name: rim.name,
            price: parseFloat(rim.price.replace(/,/g, '')),
            size: rim.size,
            quantity: rim.quantity,
            image: rim.image,
        };
        addToCart(cartItem);
        alert(`${rim.name} added to cart!`);
    };

    return (
        <div className="card2">
            <div className="rims-cards-img">
                <img src={rim.image || ""} alt={rim.name || "Rim"} className="rim-img" />
            </div>

            <div className="rim-carrd-descri">
                <div className="card-top-row">
                    <h2 className="card-name">{rim.name}</h2>
                    <span className="card-price">
                        {rim.price} <small>RWF</small>
                    </span>
                </div>

                <div className="card-specs">
                    <span className="spec-tag">Size: {rim.size}</span>
                    <span className="spec-tag">{rim.quantity}</span>
                </div>

                <div className="card-actions">
                    <button className="btn-cart" onClick={handleAddToCart}>Add to Cart</button>
                    <button className="btn-wish">♡</button>
                </div>
            </div>
        </div>
    );
};

export default Card;