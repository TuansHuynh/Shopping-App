import '../style/payment.scss'
import { useState } from 'react'
import { formatCurrency } from '../../utils/format'

type PaymentProps = {
    subtotal: number
    // tax: number
    onCheckout?: () => void
    onContinueShopping?: () => void
}

export default function Payment({
    subtotal,
    onCheckout,
    onContinueShopping,
}: PaymentProps) {
    const [shippingMethod, setShippingMethod] = useState<'standard' | 'express'>('standard')

    const shipping = shippingMethod === 'standard' ? 5000 : 15000
    const total = subtotal + shipping


    return (
        <div className="payment-container">
            <h2>Order Summary</h2>

            <div className="summary-row">
                <span>Subtotal</span>
                <span>{formatCurrency(subtotal, 'VND')}</span>
            </div>

            <div className="promo-code">
                <input type="text" placeholder="Enter promo code" />
                <button>Apply</button>
            </div>

            <div className="shipping-method">
                <p>Shipping Method</p>
                <label>
                    <input
                        type="radio"
                        name="shipping"
                        value="standard"
                        checked={shippingMethod === 'standard'}
                        onChange={() => setShippingMethod('standard')}
                    />
                    <div className="method-detail">
                        <span className="method-title">Standard Shipping</span>
                        <span className="method-desc">5–7 business days</span>
                    </div>
                    <span className="method-price">{formatCurrency(5000, 'VND')}</span>
                </label>

                <label>
                    <input
                        type="radio"
                        name="shipping"
                        value="express"
                        checked={shippingMethod === 'express'}
                        onChange={() => setShippingMethod('express')}
                    />
                    <div className="method-detail">
                        <span className="method-title">Express Shipping</span>
                        <span className="method-desc"> 1–2 business days</span>
                    </div>
                    <span className="method-price">{formatCurrency(15000, 'VND')}</span>
                </label>
            </div>

            <div className="summary-row">
                <span>Shipping</span>
                <span>{formatCurrency(shipping, 'VND')}</span>
            </div>

            {/* <div className="summary-row">
                <span>Taxes (Est.)</span>
                <span>{formatCurrency(tax, 'VND')}</span>
            </div> */}

            <div className="summary-row total">
                <span>Order Total</span>
                <span>{formatCurrency(total, 'VND')}</span>
            </div>

            <button className="checkout-btn" onClick={onCheckout}>
                Proceed to Checkout
            </button>
            <button className="continue-btn" onClick={onContinueShopping}>
                Continue Shopping
            </button>

            <div className="footer-note">Cart Checkout Payment</div>
        </div>
    )
}
