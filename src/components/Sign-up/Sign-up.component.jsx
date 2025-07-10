import React, { useState } from 'react';
import { createAuthUserWithEmailAndPassword, creatUserDocumentFromAuth } from '../../utils/firebase.utils.jsx';
import FormInput from '../form-input/form-input.component.jsx';
import './sign-up.styles.scss'
import Button from '../button/button.component.jsx';
import { useContext } from 'react';
import { UserContext } from '../context/user.context.jsx';
export const SignUpForm = () => {
  const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const resetFormFileds = () => {
    setFormFields(defaultFormFields)
  }
  

  function handleChange(event) {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password and Confirm Password didn't match");
      return;
    }

    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password);
      await creatUserDocumentFromAuth(user, { displayName })
      
      
      resetFormFileds()
      console.log('User created:', user);
    } catch (error) {
      if (error.code == 'auth/email-already-in-use') {
        alert("Email already in use");
      }
      else {
        console.log('user creation encountered an eroor :', error);
      }
    }
  };
  return (
    <div className='sign-up-container'>
      <div>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
       <FormInput
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
          label='Display Name' />
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
        <FormInput 
          label='Confirm Password'
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button  type="submit">Sign Up</Button>
      </form>
      </div>
    </div>
  );
};

// export default SignUpForm;
