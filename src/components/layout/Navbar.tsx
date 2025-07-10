import '../style/navbar.scss'

import { Link, useLocation } from "react-router-dom";

import SearchBar from "../common/SearchBar";
import Logo from "../common/Logo";
import { Icons } from '../common/Icons';

export default function Navbar() {

    const isLoggedIn = true;
    const user = isLoggedIn ? "TunaSia" : "Login";

    const location = useLocation()
    const cartQuantityCount = 50

    return (
        <div className="navbar">

            <Logo />

            <div className="search_cart">
                <SearchBar />
                <Link to='/cart' className='cart'>
                    <div className={`cart_item ${location.pathname == '/cart' ? 'active' : ''}`}>
                        <Icons.Shopping_Bag className='icons_cart' />
                    </div>
                    <span className='quantity_count'> {cartQuantityCount > 9 ? '9+' : cartQuantityCount} </span>
                </Link>
            </div>

            <div className="pages_link">

                <Link to="/home" className={`link link1 ${location.pathname === '/home' ? 'active' : ''}`}>Home</Link>
                <Link to="/product" className={`link link2 ${location.pathname === '/product' ? 'active' : ''}`}>Product</Link>
                <Link to="/about" className={`link link3 ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
                <Link to="/contact" className={`link link3 ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
                <Link to="/login" className='link link4'> {user} </Link>

            </div>
        </div>
    )
}