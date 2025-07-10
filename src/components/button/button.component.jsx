import React from 'react'
import './button.style.scss'
const Button = ({children,buttonType,...rest}) => {
    // const BUTTON_TYPE_CLASSES ={
    //     google :'google-signin',
    //     inverted :'inverted',
    // }
  return (
    <button className={`button-container ${buttonType}`} {...rest}>
      {children}
    </button>
  )
}

export default Button
