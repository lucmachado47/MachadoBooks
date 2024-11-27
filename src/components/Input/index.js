import React from 'react'
import { InputContainer } from './styles';

const Input = ({placeholder, onBlur }) => {
  return (
    <InputContainer 
        placeholder={placeholder}
      
        onBlur={onBlur}
    ></InputContainer>
  )
}

export default Input;