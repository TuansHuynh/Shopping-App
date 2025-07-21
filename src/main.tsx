import './assets/main.scss'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './Router/router.tsx'
import { RouterProvider } from 'react-router-dom'
import { CartProvider } from './context/CartContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router = {router}/>
    </CartProvider>
  </StrictMode>,
)
