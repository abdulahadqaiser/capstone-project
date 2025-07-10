import React from 'react'
import './cart-item.style.scss'
const CartItem = ({ cartitem }) => {
  
  return (
    <div className='cart-item-container'>
      <img src={cartitem.imageUrl} alt={`${cartitem.name}`} />
      <div className='item-details'>
        <span className='name'>{cartitem.name}</span>
        <span className='price'>
          {cartitem.quantity} × ${cartitem.price} = 
        </span>

      </div>
    </div> 
  )
}

export default CartItem
