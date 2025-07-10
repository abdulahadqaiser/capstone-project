import React, { useContext } from 'react'
import CheckoutItems from '../../components/checkout-items/checkout-items.component'
import { CartContext } from '../../components/context/cart.context'
import './checkout.styles.scss'
const Checkout = () => {
    const { cartItems, addItemToCart ,carttotal} = useContext(CartContext)
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>

                </div>
                <div className='header-block'>
                    <span>Description</span>

                </div>

                <div className='header-block'>
                    <span>Quantity</span>

                </div>

                <div className='header-block'>
                    <span>Price</span>

                </div>

                <div className='header-block'>
                    <span>Remove</span>

                </div>
            </div>
            
                {cartItems.map((cartItem) => {
                    return <CheckoutItems
                        key={cartItem.id}
                        cartItem={cartItem}
                        additem={() => addItemToCart(cartItem)}

                    />

                })}
            <span className='total'>{`Total  : ${carttotal}`}</span>
        </div>
    )
}

export default Checkout
