import React from 'react';
import CustomButton from '../button/custombutton';
import './cart-dropdown.scss';


const CartDropdown=()=>(
    <div className='cart-dropdown'>
        <div className='cart-items'></div>
        <CustomButton >Go to checkout</CustomButton>
    </div>
);

export default CartDropdown;