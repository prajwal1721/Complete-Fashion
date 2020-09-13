import {createSelector} from 'reselect';

const selectShop=state=>state.shop;



export const selectShopItems=createSelector([selectShop],
    shop=>shop.SHOP_DATA
);

export const selectionCollection= collectionUrlParam =>
    createSelector([selectShopItems],
     collections=>collections[collectionUrlParam]);
