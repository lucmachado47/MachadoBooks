import React from 'react'
import { Opcoes, Opcao } from './styles'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

const OpcoesHeader = () => {
  return (
    <Opcoes>
        {textoOpcoes.map((opcao) => (
            <Opcao><p>{opcao}</p></Opcao>
    ))}
  </Opcoes>
  )
}

export default OpcoesHeader;