import CardActionTypes from './cart.types';
export const toggleCartHidden=()=>({
    type:CardActionTypes.TOGGLE_CART_HIDDEN
});
export const addItem=(item)=>({
    type: CardActionTypes.ADD_ITEM,
    payload:item
});
export const reduceItem=(item)=>({
    type: CardActionTypes.REDUCE_ITEM,
    payload:item
});
export const deleteItem=(item)=>({
    type: CardActionTypes.DELETE_ITEM,
    payload:item
});