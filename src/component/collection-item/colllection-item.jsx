import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.action';
import './collection-item.scss';
import  CustomButton from '../button/custombutton';
 const CollectionItem=({item,addItem})=>{
    //console.log(item);
    const { name ,price ,imageUrl}=item;
    return (
    <div className='collection-item'>
        <div className='image'
            style={{backgroundImage:`url(${imageUrl})`}}
        >
        </div>
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{`$ ${price}`}</span>
        </div>
        <CustomButton onClick={()=>addItem(item )} cartButton='true' >Add to Cart</CustomButton>
</div>
    )};
const mapDispatchToProps=(dispatch)=>({
    addItem: item=>dispatch(addItem(item))  
})
export default connect(null,mapDispatchToProps)(CollectionItem);