export const addItemToCart=(cartItems,cartItemToAdd)=>{
    const existingCartItem=cartItems.find(cartItem=>
        cartItem.id===cartItemToAdd.id)
    if(existingCartItem)
        return  cartItems.map(cartItem=>
            (cartItem.id===cartItemToAdd.id)?
                {...cartItem,quantity:cartItem.quantity+1}
            :cartItem
            )
    return [...cartItems,{...cartItemToAdd,quantity:1}];
}
export const reduceItemFromCart=(cartItems,cartItemToReduce)=>{
    let b=0;
    cartItems.map(cartItem=>
        {if(cartItem.id===cartItemToReduce.id && cartItem.quantity===1)b=1;
        return cartItem;
        })
    if(b)
        return  cartItems.filter(cartItem=>
            (cartItem.id!==cartItemToReduce.id));
    return cartItems.map(item=>(item.id===cartItemToReduce.id)?
    ({...item,
        quantity:item.quantity-1})
    :item)
}
export const removeItemFromCart=(cartItems,cartItemToDelete)=>{
    return  cartItems.filter(cartItem=>
        (cartItem.id!==cartItemToDelete.id))
}