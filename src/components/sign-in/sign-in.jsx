import React from 'react';

import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'

import {signInWithGoogle} from '../../firebase/firebase.utils'

import './sign-in.scss';


class SignIn extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            email:'',
            password:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange=(event)=>{
        const {name,value}=event.target;
        this.setState({
            [name]:value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({email:'',password:''})
    }
    
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput 
                         type="email" 
                         name='email' 
                         label="Email" 
                         value={this.state.email} 
                         handleChange={this.handleChange}
                    />
                    <FormInput 
                         type="password" 
                         name='password' 
                         label="Password" 
                         value={this.state.password} 
                         handleChange={this.handleChange}
                    />

                    <div className="buttons">
                        <CustomButton type='submit'> Submit Form </CustomButton>
                        <CustomButton onClick={signInWithGoogle} signingooglebutton='true'>Join With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn;