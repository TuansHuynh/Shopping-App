import '../style/productlist.scss'

type ProductProps = {
    id?: number,
    name: string,
    image: string,
    price?: number,
    discount?: number,
    priceDiscount?: number,
    quantity?: number,
    // description: string,
}

export const ProductList: React.FC<ProductProps> = ({name, image, price, priceDiscount, quantity}) => {
    return (
        <div className="product">
            <img src={image} alt={name} />
            <div className="product-name">{name}</div>
            {priceDiscount ? (
                <>
                    <div className="product-price">{priceDiscount?.toLocaleString()}₫</div>
                    <div className="product-original-price">{price?.toLocaleString()}₫</div>
                </>
            ) : (
                <div className="product-price">{price?.toLocaleString()}₫</div>
            )}
            <div className="product-quantity">Số lượng: {quantity}</div>
        </div>
    )
}
