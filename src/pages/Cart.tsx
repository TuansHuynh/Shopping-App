import './style/cart.scss'
import CartItem from "../components/common/CartItem"
import Payment from "../components/common/Payment"
import { useCart } from "../context/CartContext"
import { useNavigate } from 'react-router-dom'

export default function Cart() {
    const { cartItems } = useCart()

    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity, 0
    )

    // const tax = Math.round(subtotal * 0.01)

    const navigate = useNavigate()

    return (
        <div className="cart_">
            {cartItems.length === 0 ? (
                <div className="empty_cart">Chưa có sản phẩm trong giỏ hàng</div>
            ) : (
                <>
                    <div className="cart_item_container">
                        {cartItems.map(item => (
                            <CartItem
                                key={item.id}
                                product={item}
                                quantity={item.quantity}
                                onIncrease={() => {}}
                                onDecrease={() => {}}
                            />
                        ))}
                    </div>
                    <div className="payment">
                        <Payment
                            subtotal={subtotal}
                            // tax={tax}
                            onCheckout={() => console.log("Thanh toán")}
                            onContinueShopping={() => navigate('/')}
                        />
                    </div>
                </>
            )}
        </div>
    )
}
