import React from 'react';
import {Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.util'

import {createStructuredSelector} from 'reselect';

import { ReactComponent as Logo} from '../../assets/crown.svg';
import {connect} from 'react-redux';
import './header.scss'
import CartIcon from  '../shopping-cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {selectHidden} from '../../redux/cart/cart.selectors';
const Header=({currentUser,hidden})=>(
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'></Logo>
        </Link>
    <div className='options'>
        <Link className='option' to='/shop'> Shop</Link>
        <Link className='option' to='/contact'> Contact</Link>
        {
            currentUser?
            <div className='option' onClick={()=>auth.signOut()}>SignOut</div>:
            <Link className='option' to='./signin' >SignIn</Link> 
        }
        <CartIcon  />
    </div>
    {(!hidden?<CartDropdown />:null)}
    </div>
);
const mapStateToProps=createStructuredSelector({
        hidden: selectHidden,
        currentUser :selectCurrentUser
});
export default connect(mapStateToProps)(Header);