  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import './index.css'
  import App from './App.jsx'
  import { BrowserRouter } from 'react-router-dom'
  import { UserProvider } from './components/context/user.context.jsx'
  import { CatagoriesProvider } from './components/context/catagories.context.jsx'
  import { CartContextProvider } from './components/context/cart.context.jsx'
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BrowserRouter basename="/capstone-project">
        <UserProvider>
          <CatagoriesProvider>
            <CartContextProvider>
            <App />
            </CartContextProvider>
          </CatagoriesProvider>
        </UserProvider>
      </BrowserRouter>
    </StrictMode>,
  )
