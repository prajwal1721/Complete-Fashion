import React from 'react';
import CustomButton from '../button/custombutton';
import './cart-dropdown.scss';
import {connect} from 'react-redux';
import {CartItem} from '../cart-item/cart-item';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {withRouter} from 'react-router-dom';
const CartDropdown=({cartItems,history})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {cartItems.length?
        cartItems.map(item=><CartItem key={item.id} item={item}/>):
        <span className="empty-cart">Your cart is empty</span>}
        </div>
        <CustomButton 
        onClick={()=>history.push('./checkout')}>
            Go to checkout</CustomButton>
    </div>
);
const mapStateToProps=state=>({
    cartItems:selectCartItems(state)
})
export default withRouter(connect(mapStateToProps)(CartDropdown));