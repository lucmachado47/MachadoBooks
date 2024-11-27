import React from 'react'
import { UltimosLancamentosContainer, NovosLivrosContainer } from './styles';
import { livros } from './dadosUltimosLancamentos';
import  { Titulo }  from '../Titulo/index';
import CardRecomendacao from '../CardRecomendacao';
import imgLivro from '../../assets/livro2.png';

const UltimosLancamentos = () => {
  return (
    <UltimosLancamentosContainer>
        <Titulo 
            cor="#5e35b1"
            tamanhoFonte="30px" 
        >
            ÚLTIMOS LANÇAMENTOS
        </Titulo>
        <NovosLivrosContainer>
            { livros.map((livro) => (
                <img src={livro.src} alt="livro-img"></img>
            ))}
        </NovosLivrosContainer>
        <CardRecomendacao 
            titulo="Talvez você se interesse por:"
            subtitulo="Angular 11"
            descricao="Construindo uma aplicação com a plataforma Google"
            img={imgLivro}
        />
    </UltimosLancamentosContainer>)
}

export default UltimosLancamentos;