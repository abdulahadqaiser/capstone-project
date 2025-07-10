import { createContext, useEffect, useState } from "react";

const addCartitem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    else { return [...cartItems, { ...productToAdd, quantity: 1 }]; }

};
const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== existingCartItem.id)
    }



    if (!existingCartItem) return cartItems

    return cartItems.map((cartItem) => 
        cartItem.id === cartItemToRemove.id 
            ?{ ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem

    )
}
const deleteCartItem =(cartItems,productToDelete)=>
{
    const existingCartItem = cartItems.find((cartItem)=>cartItem.id = productToDelete.id)

    if(existingCartItem)
    {
        return cartItems.filter((cartItem)=>cartItem.id !==existingCartItem.id)
    }

}
const totalPrice = ()=>{
    
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemToCart: () => { },
    deletItemFromCart: ()=>{}
})

export const CartContextProvider = ({ children }) => {

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [carttotal, setCartTotal] = useState(0)
    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount);

    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price
        , 0)
        setCartTotal(newCartTotal);

    }, [cartItems])
    function addItemToCart(productToAdd) {
        setCartItems(addCartitem(cartItems, productToAdd))

    }
    function removeItemToCart(cartItemToRemove) {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))

    }
    function deletItemFromCart(productToDelete)
    {
        setCartItems(deleteCartItem(cartItems,productToDelete))

    }
    const value = { isCartOpen,
         setIsCartOpen,
        addItemToCart,
         cartItems,
          cartCount, 
          removeItemToCart,
          deletItemFromCart,
           carttotal };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}