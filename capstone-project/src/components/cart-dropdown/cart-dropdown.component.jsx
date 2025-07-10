import React, { useContext } from 'react'
import './cart-dropdown.styles.scss'
import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../context/cart.context'
import { Link } from 'react-router-dom'

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext)
  return (
    <div className='cart-dropdown-container'>
    
      <div className='cart-items'>
        {cartItems.length ?(cartItems.map((item)=>{
          return <CartItem key={item.id} cartitem={item}/>
        })): <span className='empty-message'>Your Cart Is Empty Dawg! buy a thing 🔪🔪🔪</span>
        }
      </div>
      <Link  className="nav-link" to='/checkout'>
      <Button>Go to checkout</Button>
      </Link>

      

      
    </div>
  )
}
export default CartDropdown 

