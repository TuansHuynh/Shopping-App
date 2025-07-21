import '../style/cart_item.scss'
import { formatCurrency } from '../../utils/format'
import { Icons } from './Icons'

type Product = {
    id: number
    image: string
    name: string
    price: number
}

type CartItemProps = {
    product: Product
    quantity: number
    onIncrease: () => void
    onDecrease: () => void
}

export default function CartItem({
    product,
    quantity,
    onIncrease,
    onDecrease,
}: CartItemProps) {
    return (
        <div className="cart-item">
            <div className="item-info">
                <img src={product.image} alt={product.name} className="product-img" />
                <div className="product-details">
                    <div className="product-name">{product.name}</div>
                    <div className="product-price">Price: {formatCurrency(product.price, 'VND')}</div>
                </div>
            </div>

            <div className="item-actions">
                <div className="quantity-control">
                    <button onClick={onDecrease}>−</button>
                    <input type="number" value={quantity} readOnly />
                    <button onClick={onIncrease}>+</button>
                </div>
                <div className="subtotal">
                    Subtotal: {formatCurrency(product.price * quantity, 'VND')} 
                </div>
                <div className="item-actions-bottom">
                    <span className="save-later"><Icons.Heart /> Save for Later</span>
                    <span className="remove"><Icons.Delete /> Remove</span>
                </div>
            </div>
        </div>
    )
}
