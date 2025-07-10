
type ProductProps = {
    id: number,
    name: string,
    price: number,
    discount: number,
    priceDiscount: number,
    quantity: number,
    description: string,
}

export const Product: React.FC<ProductProps> = ({id, name, price, discount, priceDiscount, quantity, description}) => {

    return(
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{price}</div>
            <div>{discount}</div>
            <div>{priceDiscount}</div>
            <div>{quantity}</div>
            <div>{description}</div>
        </div>
    )
}