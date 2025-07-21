import { Link } from 'react-router-dom'
import './style/home.scss'
import { ProductList } from '../components/common/ProductList'

export default function Home() {

    // const name = "iPhone 14"
    // const image = "/image/Iphone 14.jpg"
    // const price = 1000000
    // const priceDiscount = 9000000
    // const quantity = 100

    const product = [
        {name: "iPhone 14", image: "/image/Iphone 14.jpg", price: 1000000, priceDiscount: 9000000, quantity: 100},
        {name: "iPhone 14", image: "/image/Iphone 14.jpg", price: 1000000, priceDiscount: 9000000, quantity: 100},
        {name: "iPhone 14", image: "/image/Iphone 14.jpg", price: 1000000, priceDiscount: 9000000, quantity: 100},
        {name: "iPhone 14", image: "/image/Iphone 14.jpg", price: 1000000, priceDiscount: 9000000, quantity: 100},
        {name: "iPhone 14", image: "/image/Iphone 14.jpg", price: 1000000, priceDiscount: 9000000, quantity: 100},
        {name: "iPhone 14", image: "/image/Iphone 14.jpg", price: 1000000, priceDiscount: 9000000, quantity: 100},
        {name: "iPhone 14", image: "/image/Iphone 14.jpg", price: 1000000, priceDiscount: 9000000, quantity: 100},
        {name: "iPhone 14", image: "/image/Iphone 14.jpg", price: 1000000, priceDiscount: 9000000, quantity: 100},
        {name: "iPhone 14", image: "/image/Iphone 14.jpg", price: 1000000, priceDiscount: 9000000, quantity: 100},
        {name: "iPhone 14", image: "/image/Iphone 14.jpg", price: 1000000, priceDiscount: 9000000, quantity: 100},
    ]

    return (
        <div className='home'>

            {/* <div className="box box1 banner">Banner For Smarphone</div> */}

            <div className='link_product'>
                {product.map(item => (

                    <Link to='/product-infomation' className='link'>
                    <ProductList
                        name={`${item.name}`}
                        image={`${item.image}`}
                        price={item.price}
                        priceDiscount={item.priceDiscount}
                        quantity={item.quantity}
                        />
                </Link>
                    ))}
            </div>

            {/* <div className="box box3">Banner For Laptop</div>
            <div className="box box4">Box 4</div>
            <div className="box box5">Box 5</div> */}
        </div>
    )
}