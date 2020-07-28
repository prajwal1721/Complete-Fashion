import React from 'react';
import './signin.scss';
import CustomButton from '../button/custombutton';
import FormInput from '../../component/form-input/form-input';
import {signInWithGoogle,auth} from '../../firebase/firebase.util';
class SignIn extends React.Component{
    constructor(props){
        super(props);   
        this.state={
            email:'',
            password:'',
            msg:''
        }
    }

    handleSubmit =async event=>{
        event.preventDefault();
        try{
            await auth.signInWithEmailAndPassword(this.state.email,this.state.password);
            this.setState({email:'',password:''})
        }catch(error){
            this.setState({msg:error.message});
            console.log(error);
        }
    }

    onChange=event=>{
        const {value,name}=event.target;
        this.setState({[name]:value})
        console.log(this.state);
    }

    render(){
        const {msg}=this.state;
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
                    <div>
                        {msg?<h5 style={{color:'red'}}>
                        {msg}
                        </h5>:null}
                    </div>
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