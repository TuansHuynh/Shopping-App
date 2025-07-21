import '../style/navbar.scss'
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../common/SearchBar";
import Logo from "../common/Logo";
import { Icons } from '../common/Icons';
import { useCart } from '../../context/CartContext';
import { useState } from 'react';

// 🧪 Danh sách sản phẩm mẫu
const allProducts = [
    { id: 1, name: "iPhone 14 Pro Max", image: "/image/Iphone 14.jpg" },
    { id: 2, name: "Samsung S24 Ultra", image: "/image/S24 Ultra.jpg" },
    { id: 3, name: "Xiaomi Note 12", image: "/image/xiaomi.jpg" },
    // Bro có thể thay bằng API hoặc import từ product list thật
]

export default function Navbar() {
    const isLoggedIn = true;
    const user = isLoggedIn ? "TunaSia" : "Login";

    const location = useLocation();
    const { cartItems } = useCart();

    const cartQuantityCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    // 🔍 Search
    const [searchTerm, setSearchTerm] = useState('')
    const filteredProducts = allProducts.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="navbar">
            <Logo />

            <div className="search_cart">
                <div className="search_area">
                    <SearchBar value={searchTerm} onChange={setSearchTerm} />

                    {searchTerm && (
                        <div className="search_results">
                            {filteredProducts.length === 0 ? (
                                <div className="no_results">Không tìm thấy sản phẩm</div>
                            ) : (
                                filteredProducts.map(product => (
                                    <Link
                                        key={product.id}
                                        to={`/product/${product.id}`}
                                        className="search_result_item"
                                        onClick={() => setSearchTerm('')}
                                    >
                                        <img src={product.image} alt={product.name} />
                                        <span>{product.name}</span>
                                    </Link>
                                ))
                            )}
                        </div>
                    )}
                </div>

                <Link to='/cart' className='cart'>
                    <div className={`cart_item ${location.pathname === '/cart' ? 'active' : ''}`}>
                        <Icons.Shopping_Bag className='icons_cart' />
                    </div>
                    <span className='quantity_count'>
                        {cartQuantityCount > 9 ? '9+' : cartQuantityCount}
                    </span>
                </Link>
            </div>

            <div className="pages_link">
                <Link to="/home" className={`link link1 ${location.pathname === '/home' ? 'active' : ''}`}>Trang Chủ</Link>
                <Link to="/product" className={`link link2 ${location.pathname === '/product' ? 'active' : ''}`}>Sản Phẩm</Link>
                <Link to="/about" className={`link link3 ${location.pathname === '/about' ? 'active' : ''}`}>Về Chúng Tôi</Link>
                <Link to="/contact" className={`link link3 ${location.pathname === '/contact' ? 'active' : ''}`}>Liên Hệ</Link>
                <Link to="/login" className='link link4'> {user} </Link>
            </div>
        </div>
    )
}
