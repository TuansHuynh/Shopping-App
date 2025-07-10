import { Link } from 'react-router-dom'
import './style/home.scss'
import { Product } from '../components/common/Product'

export default function Home() {

    return (
        <div className='home'>

            <div className="box box1">Banner For Smarphone</div>
            <div className='link_product'>
                <Link to='' className='link'>
                    <Product
                        id= {1}
                        name= "iPhone"
                        price= {100000}
                        discount= {0.1}
                        priceDiscount= {90000}
                        quantity= {100}
                        description= "1000"
                    />
                    
                    <Product
                        id= {1}
                        name= "iPhone"
                        price= {100000}
                        discount= {0.1}
                        priceDiscount= {90000}
                        quantity= {100}
                        description= "1000"
                    />

                    <Product
                        id= {1}
                        name= "iPhone"
                        price= {100000}
                        discount= {0.1}
                        priceDiscount= {90000}
                        quantity= {100}
                        description= "1000"
                    />
                </Link>
            </div>

            <div className="box box3">Banner For Laptop</div>
            <div className="box box4">Box 4</div>
            <div className="box box5">Box 5</div>
        </div>
    )
}