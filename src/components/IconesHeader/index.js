import React from 'react'
import { Icones, Icone } from './styles'
import Perfil from '../../assets/perfil.svg'
import Sacola  from '../../assets/sacola.svg'


const icones = [Perfil, Sacola]

const IconesHeader = () => {
  return (
    <Icones>
        {icones.map((icone) => (
            <Icone><img src={icone} alt="icones"/></Icone>
        ))}
    </Icones>
  )
}

export default IconesHeader;