import React from 'react';
import CollectionsOverview from '../../component/collections-overview/collectionsoverview';
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection.component';

const ShopPage =({match})=>(
            <div className='shop-page'>
                <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
                <Route exact path={`${match.path}/`} component={CollectionsOverview}  />
               
            </div>);
    
export default  ShopPage;