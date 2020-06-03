import React from 'react';

import './custom-button.scss'

const CustomButton=({children,...otherProps})=>(
   <button className={`${otherProps.signingooglebutton?'google-button':''} custom-button`} {...otherProps}>
     {children}
   </button>
)

export default CustomButton;
