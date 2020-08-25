import React from 'react';
import './cart-item.scss';

export const CartItem = ({item:{name,imageUrl,price,quantity}})=>(
    <div className='cart-item' >
        <div className="img-container">
            <img src={imageUrl} alt="item"></img>
        </div>
        <div className='item-details'>
            <div className='name'>{name}</div>
<div className='other-details'>{`${quantity} x $${price}`}</div>
        </div>
    </div>
)