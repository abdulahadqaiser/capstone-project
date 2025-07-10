import { Link, Outlet } from "react-router-dom"
import logo from '../../assets/crown.svg';
import './navigation.styles.scss'
import { useContext, useEffect } from "react";
import { UserContext } from "../../components/context/user.context";
import { signOutUser } from '../../utils/firebase.utils';
import CartIcon from "../../components/Cart-icon.component.jsx/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../components/context/cart.context";

const Navigation = () => {
    const {currentUser} = useContext(UserContext)
    const {isCartOpen} = useContext(CartContext)


    
    return (
        <>
            <div className="navigation">
                <Link className="logo-conatiner" to='/'>
                    <img src={logo} alt="logo" />

                </Link>

                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    {currentUser ?(
                        <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                    ):
                    (
                        <Link className="nav-link" to='/auth'>
                        SIGN IN
                    </Link>

                    )}
                    
                    <CartIcon/>
                    
                </div>
                { isCartOpen && <CartDropdown/>}

            </div>
            <Outlet />
        </>

    )
}

export default Navigation