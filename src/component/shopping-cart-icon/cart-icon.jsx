import React from 'react';


import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg.svg';
import {toggleCartHidden}  from '../../redux/cart/cart.action';
import './cart.scss';
import {connect} from 'react-redux';

const CartIcon=({cartItems,toggleCartHidden})=>(
    <div onClick={()=>toggleCartHidden()} className='cart-icon'>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>
                {getCount(cartItems)}
        </span>   
        
    </div>
);
const getCount=cartItems=>{
    var s=0;
    cartItems.map(item=>s+=item.quantity);
    return s;
}
const mapStateToProps=state=>({
    cartItems:state.cart.cartItems
})
const mapDispatchToProps=(dispatch)=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
});



export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);

