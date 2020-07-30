import React from 'react';


import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg.svg';
import {toggleCartHidden}  from '../../redux/cart/cart.action';
import './cart.scss';
import {connect} from 'react-redux';

const CartIcon=({toggleCartHidden})=>(
    <div onClick={()=>toggleCartHidden()} className='cart-icon'>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>
                {45}
        </span>   
        
    </div>
);

const mapDispatchToProps=(dispatch)=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
});



export default connect(null,mapDispatchToProps)(CartIcon);

