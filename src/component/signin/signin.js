import React from 'react';
import './signin.scss';
import CustomButton from '../button/custombutton';
import FormInput from '../../component/form-input/form-input';
import {signInWithGoogle} from '../../firebase/firebase.util';
class SignIn extends React.Component{
    constructor(props){
        super(props);   
        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit = event=>{
        event.preventDefault();
        this.setState({email:'',password:''})
    }

    onChange=event=>{
        const {value,name}=event.target;
        this.setState({[name]:value})
        console.log(this.state);
    }

    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Signin with your username and password</span>
                <form onSubmit={this.handleSubmit}>
                  
                    <FormInput 
                        handleChange={this.onChange} 
                        label='Email'
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        required />
    
                    <FormInput 
                        label='Password'
                        handleChange={this.onChange} 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        required />
            <div className='buttons'>
                <CustomButton  type='submit' >Sign In</CustomButton>
                <CustomButton isGoogleSignIn onClick={signInWithGoogle} >Sign In with Google</CustomButton>
            </div>
                </form>
            </div>
        )
    }
}

export default SignIn;