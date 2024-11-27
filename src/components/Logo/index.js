import React from 'react'
import logo from '../../assets/logo.svg';
import { LogoContainer, LogoImg } from './styles'

const Logo = () => {
  return (
    <LogoContainer>
        <LogoImg
          src={logo}
          alt="logo"
        />
        <p><strong>Machado</strong>Books</p>
    </LogoContainer>
  )
}

export default Logo;