import { createContext, useContext, useState, type ReactNode } from "react";

export type Product = {
    id: number
    name: string
    image: string
    price: number
    quantity: number
}

type CartContextType = {
    cartItems: Product[]
    addToCart: (product: Product) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) throw new Error("useCart must be used within CartProvider")
    return context
}

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<Product[]>([])

    const addToCart = (product: Product) => {
        setCartItems(prev => {
            const existing = prev.find(p => p.id === product.id)
            if (existing) {
                return prev.map(p =>
                    p.id === product.id ? { ...p, quantity: p.quantity + product.quantity } : p
                )
            } else {
                return [...prev, product]
            }
        })
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}