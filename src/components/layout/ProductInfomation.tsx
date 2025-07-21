import { useCart } from '../../context/CartContext'
import '../style/productinfomation.scss'

export default function ProductInfomation() {
    const { addToCart } = useCart()

    const product = {
        id: 999,
        name: "iPhone 14 Pro Max",
        image: "/image/Iphone 14.jpg",
        price: 9000000,
        quantity: 1,
    }

    const handleAddToCart = () => {
        addToCart(product)
    }

    const handleBuyNow = () => {
        addToCart(product)
        // Điều hướng tới trang giỏ hàng nếu muốn
    }

    return (
        <div className="product-detail">
            <div className="product-image">
                <img src={product.image} alt={product.name} />
            </div>

            <div className="product-info">
                <div>
                    <div className="product-code">Mã SP: <span>#{product.id}</span></div>
                    <div className="product-name">{product.name}</div>
                    <div className="product-price-group">
                        <div className="price-discount">{product.price.toLocaleString()} đ</div>
                    </div>
                    <div className="product-quantity">Số lượng còn: 100</div>

                    <ul className="product-description">
                        <li>Màn hình 6.7 inch Super Retina XDR</li>
                        <li>Chip Apple A16 Bionic mạnh mẽ</li>
                        <li>Dung lượng 256GB, màu Titan Black</li>
                    </ul>
                </div>

                <div className='button'>
                    <button className='add_to_cart' onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
                    <button className='buy' onClick={handleBuyNow}>Mua hàng</button>
                </div>
            </div>
        </div>
    )
}