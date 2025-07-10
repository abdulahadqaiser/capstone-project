import React, { useContext, useState } from 'react';
import { 
     signInWithGooglePopup,
     creatUserDocumentFromAuth,
     signInWithAuthEmailAndPassword 
     } from '../../utils/firebase.utils.jsx';
import FormInput from '../form-input/form-input.component.jsx';
import './sign-in.styles.scss'
import Button from '../button/button.component.jsx';

export const Signin = () => {
  const defaultFormFields = {
    email: '',
    password: '',
    
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {  email, password } = formFields;
  const resetFormFileds = () => {
    setFormFields(defaultFormFields)
  }
  const logGoogleUser = async () =>{
     await signInWithGooglePopup();
    
      
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    

    try {
      const {user} = await signInWithAuthEmailAndPassword (email,password);
      
      
     resetFormFileds()
      console.log('User created:', user);
    } catch (error) {
        if(error.code == 'auth/invalid-credential')
        {
            alert('Invalid credentials')
        }
        else if(error.code == 'auth/user-not-found'){
            alert('User not found')
        }
        else if(error.code == 'auth/wrong-password'){
            alert('Wrong password')
        }
        
      console.log(error)
      
    }
  };
  return (
    <div className='sign-up-container'>
      <div>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
       
        <FormInput
          label='Email'
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label='Password'
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
       <div className='buttons-container'>
        <Button  type="submit">Sign in</Button>
        <Button buttonType='google-sign-in' onClick ={logGoogleUser} > Google Sign in</Button>
       </div>
        
      </form>
      </div>
    </div>
  );
};

// export default SignUpForm;
