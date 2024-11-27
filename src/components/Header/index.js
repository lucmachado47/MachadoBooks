import React from 'react'
import Logo from '../../components/Logo'
import OpcoesHeader from '../../components/OpcoesHeader'
import IconesHeader from '../../components/IconesHeader'
import { HeaderContainer } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
        <Logo />
        <OpcoesHeader />
        <IconesHeader />
      </HeaderContainer>
  )
}

export default Header;