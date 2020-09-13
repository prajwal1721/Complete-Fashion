import React from 'react';
import StripeCheckout from  'react-stripe-checkout';

const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*100;
    const publishableKey='pk_test_51HQr8nFYeWYq7Z46IDKsKGnN3qhSNF9dFVWXvEGbLCnNKKYTA6FFd5TK6t9fFHX3XACjCgiLJaBM6T2dRtl2Dqxc00AVawI8mx';
    const  onToken= token =>{
        console.log(token);
        alert('Payment Successful')
    }
    return (
        <StripeCheckout 
            amount={priceForStripe}
            label='Pay Now'
            name='CompleteFashion'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};
export default StripeCheckoutButton;
