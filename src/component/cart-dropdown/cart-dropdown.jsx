import React from 'react';
import CustomButton from '../button/custombutton';
import './cart-dropdown.scss';
import {connect} from 'react-redux';
import {CartItem} from '../cart-item/cart-item';
const CartDropdown=({cartItems})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {cartItems.map(item=><CartItem key={item.id} item={item}/>)}
        </div>
        <CustomButton >Go to checkout</CustomButton>
    </div>
);
const mapStateToProps=state=>({
    cartItems:state.cart.cartItems
})
export default connect(mapStateToProps)(CartDropdown);