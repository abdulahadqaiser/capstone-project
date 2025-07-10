import React, { useContext } from 'react'
import { CartContext } from '../context/cart.context'
 import './checkout-items.styles.scss'

const CheckoutItems = ({ cartItem,additem }) => {
const {removeItemToCart,deletItemFromCart} = useContext(CartContext)
const removeItemFromCart = ()=>removeItemToCart(cartItem)
const deleteCartItem = ()=>deletItemFromCart(cartItem)
const totalPrice = cartItem.price*cartItem.quantity
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
            <img src={cartItem.imageUrl} alt={cartItem.name}/>
            </div>
            <span className='name'>{cartItem.name}</span>            
            <span className='quantity'><span onClick={removeItemFromCart} className='arrow' >&lt;</span>{cartItem.quantity}<span onClick={additem} className='arrow'>&gt;</span></span>                        
            <span className='price'>${totalPrice}</span>            
            <div className='remove-button' onClick={deleteCartItem} >&#10005;</div>
        </div>
    )
}


export default CheckoutItems
