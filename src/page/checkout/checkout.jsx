import React from 'react';
import './checkout.scss';
import {addItem,reduceItem,deleteItem} from '../../redux/cart/cart.action';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import StripeCheckoutButton from '../../component/stripe-button/stripe-button';
const CheckoutPage = ({cartItems,total,addItem,reduceItem,deleteItem})=>(
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(item=>
            <div  
            key={item.id}
            className='checkout-header'>
            <div className='header-block'>
                <img src={item.imageUrl} alt={item.name}></img>
            </div>
            <div className='header-block'>
                <span>{item.name}</span>
            </div>
            <div className='header-block'>
                <button onClick={()=>reduceItem(item)}>{'<'}</button>
                <span>{item.quantity}</span>
                <button 
                onClick={()=>
                    addItem(item)
                }>{'>'}</button>
            </div>
            <div className='header-block'>
                <span>{`${item.quantity} X ${item.price} = ${item.quantity*item.price}`}</span>
            </div>
            <div className='header-block'>
        <button 
        onClick={()=>deleteItem(item)}>
        {'X'}</button>
            </div>
        </div>
        
    )}
<div className='total'><span>TOTAL: ${total}</span></div>
<StripeCheckoutButton price={total}/>
<div className='test-warning'>
    *Please using the following test card for payment
    <br/>
    4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
</div>
    </div>
);
const mapStateToProps=createStructuredSelector({    
    cartItems: selectCartItems,
    total: selectCartTotal
});
const mapDispatchToProps=dispatch=>
    ({
        addItem: item=>dispatch(addItem(item)),
        reduceItem:item=>dispatch(reduceItem(item)),
        deleteItem:item=>dispatch(deleteItem(item))
    })

export default connect(mapStateToProps,mapDispatchToProps)(CheckoutPage);