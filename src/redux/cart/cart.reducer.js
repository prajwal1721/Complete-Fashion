import CardActionTypes from './cart.types';
import {addItemToCart,reduceItemFromCart,removeItemFromCart} from  './cart.utils';

const INITIAL_STATE ={
    hidden:true,
    cartItems: [],  
};

const cartReducer =(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case CardActionTypes.TOGGLE_CART_HIDDEN:return{
            ...state,
            hidden:!state.hidden
        };
        case CardActionTypes.ADD_ITEM:return{
            ...state,
            cartItems:addItemToCart(state.cartItems,action.payload)
        };
        case CardActionTypes.REDUCE_ITEM:return{
            ...state,
            cartItems:reduceItemFromCart(state.cartItems,action.payload)
        };
        case CardActionTypes.DELETE_ITEM:return{
            ...state,
            cartItems:removeItemFromCart(state.cartItems,action.payload)
        };
        default:return state;
    }
};

export default cartReducer;