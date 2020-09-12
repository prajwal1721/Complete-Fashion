import React from 'react';
import './collection.scss';
import {connect} from 'react-redux';
import {selectionCollection} from '../../redux/shop/shop.selector';
// import {CollectionItem} from '../../component/collection-item/colllection-item';
const CollectionPage=({collection})=>{
    console.log(collection);
    return (
    <div className='collection'>
        <h2>Collection page</h2>
 
    </div>
);}
const mapStateToProps=(state,ownProps)=>({
    collection:selectionCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);