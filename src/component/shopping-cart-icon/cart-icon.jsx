import React from 'react';


import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg.svg';
import {toggleCartHidden}  from '../../redux/cart/cart.action';
import './cart.scss';
import {connect} from 'react-redux';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';


const CartIcon=({count  ,toggleCartHidden})=>(
    <div onClick={()=>toggleCartHidden()} className='cart-icon'>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>
                {count}
        </span>   
        
    </div>
);
const mapStateToProps=(state)=>({
    count:selectCartItemsCount(state)
})
const mapDispatchToProps=(dispatch)=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
});



export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);

