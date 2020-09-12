import {createSelector} from 'reselect';

const selectShop=state=>state.shop;

const COLLECTION_ID_MAP={
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5

}

export const selectShopItems=createSelector([selectShop],
    shop=>shop.SHOP_DATA
);

export const selectionCollection= collectionUrlParam =>
    createSelector([selectShopItems],
     collections=>collections.find(collection=>collection.id=== COLLECTION_ID_MAP[collectionUrlParam]));
