import React from 'react';
import {Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.util'
import { ReactComponent as Logo} from '../../assets/crown.svg';
import './header.scss'
export const Header=({currentUser})=>(
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'></Logo>
        </Link>
    <div className='options'>
        <Link className='option' to='/shop'> Shop</Link>
        <Link className='option' to='/contact'> Contact</Link>
        {
            currentUser?
            <div className='option' onClick={()=>auth.signOut()}>SignOut</div>:
            <Link className='option' to='./signin' >SignIn</Link> 
        }
    </div>
 
    </div>
);
    