import React from 'react';


import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg.svg';
import {toggleCartHidden}  from '../../redux/cart/cart.action';
import './cart.scss';
import {connect} from 'react-redux';

const CartIcon=({item_cnt,toggleCartHidden})=>(
    <div onClick={()=>toggleCartHidden()} className='cart-icon'>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>
                {item_cnt}
        </span>   
        
    </div>
);
const mapStateToProps=state=>({
    item_cnt:state.cart.cartItems.length
})
const mapDispatchToProps=(dispatch)=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
});



export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);

