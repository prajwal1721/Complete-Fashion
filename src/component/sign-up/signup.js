import React from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../button/custombutton';
import {auth,createUserProfileDocument} from '../../firebase/firebase.util';
import './signup-styles.scss';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:'',
            msg:''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        const {name,value}=e.target;
        this.setState({[name]:value},()=>
        console.log(this.state));
    }

    handleSubmit = async event=>{
        event.preventDefault();
        const{displayName,email,password,confirmPassword}=this.state;
        if(password !== confirmPassword){
            alert('match passwords')
            return;
        }
        if(password.length<6){
            alert('Password length is less than 6')
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName});
            this.setState({
                name:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        }
        catch(error){
            this.setState({msg:error.message,
                name:'',
                email:'',
                password:'',
                confirmPassword:''
            });
            console.log(error);
        }
    }
    render(){
        const {displayName,email,password,confirmPassword,msg}=this.state;
        return(
            <div className='sign-up'>
                <h2 className="title">I do not have a account</h2>
                <span>
                  Signup With Email and Password  
                </span> 
                <form className='form' onSubmit={this.handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label='Display Name'
                    required
                >
                </FormInput>

                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label='Email'
                    required
                >
                </FormInput>

                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label='Password'
                    required
                >
                </FormInput>
                
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label='ConfirmPassword'
                    required
                >
                </FormInput>
                <div>
                    {password!==confirmPassword?<h5 style={{color:'red'}}>
                        Password do not match
                        </h5>:null}
                    {password.length<6?<h5 style={{color:'red'}}>
                        Password length should be atleast 6
                        </h5>:null}
                    {msg?<h5 style={{color:'red'}}>
                        {msg}
                        </h5>:null}

                </div>
               <CustomButton type='submit' >Submit</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;