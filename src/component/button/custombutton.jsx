import React from 'react';
import './custombutton.scss';
const CustomButton=({children,isGoogleSignIn,cartButton=false, ...otherProps})=>(
    <button className={`${isGoogleSignIn?'google-signin ':' '}
    ${cartButton?'cartButton ': ' '} custom-button`}
    
    {...otherProps}>
            {children}
    </button>
)   
export default CustomButton;