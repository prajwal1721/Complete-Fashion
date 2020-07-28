import React from 'react';
import './page.scss';
import SignIn from '../../component/signin/signin'
import SignUp from '../../component/sign-up/signup';
export const SignInandSignout= ()=>(
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)