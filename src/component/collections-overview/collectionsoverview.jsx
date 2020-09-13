import React from 'react';
import './collectionsoverview.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionForPreview} from '../../redux/shop/shop.selector';
import {PreviewCollection} from '../preview-component/previewcollection';
const CollectionsOverview=({collections})=>(
    <div className='collections-overview'>
         {collections.map((collection)=><PreviewCollection key={collection.id} {...collection}/>)}
    </div>
)
const mapStateToProps=createStructuredSelector({
    collections:selectCollectionForPreview
})
export default connect(mapStateToProps) (CollectionsOverview)