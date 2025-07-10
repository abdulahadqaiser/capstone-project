import React from 'react'

import { SignUpForm } from '../../components/Sign-up/Sign-up.component';
import { Signin } from '../../components/Sign-in/Sign-in.component';
import './authentication.styles.scss'
const Authentication = () => {
  
  return (
    <div className='authentication-container '>
      
      <Signin/>
      <SignUpForm/> 
    </div>
  )
}

export default Authentication
