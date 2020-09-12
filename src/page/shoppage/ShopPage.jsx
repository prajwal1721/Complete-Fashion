import React from 'react';
import {createStructuredSelector}from 'reselect';
import {PreviewCollection} from '../../component/preview-component/previewcollection';
import {selectShopItems } from '../../redux/shop/shop.selector';
import {connect} from 'react-redux';

const ShopPage =({collections})=>(
            <div className='shop-page'>
                {collections.map((collection)=><PreviewCollection key={collection.id} {...collection}/>)}
            </div>);
        
const mapStateToProps=createStructuredSelector({
    collections:selectShopItems
});
export default connect(mapStateToProps) (ShopPage);