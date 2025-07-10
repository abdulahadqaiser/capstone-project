import React, { useContext } from 'react'
import Carticon from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import { CartContext } from '../context/cart.context'


const CartIcon = () => {
    const {isCartOpen,setIsCartOpen} = useContext(CartContext)
    const {cartCount} = useContext(CartContext)
    const toogleCartDropDown = ()=>setIsCartOpen(!isCartOpen)
  return (
    <div className='cart-icon-container' onClick={toogleCartDropDown}>
      <img src={Carticon} className='shopping-icon'/>
      <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon
