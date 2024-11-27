import React from 'react'
import Input from '../Input';
import { PesquisaContainer, Titulo, SubTitulo, Resultado } from './styles';
import { useState } from 'react';
import { livros } from './dadosPesquisas';


const Pesquisa = () => {
  const [ livrosPesquisados, setLivrosPesquisados ] = useState([])

  const handleBlur = (event) => {
    const textoDigitado = event.target.value.trim();

    if (textoDigitado === "") {
      setLivrosPesquisados([]);
    } else {
      const resultadoPesquisa = livros.filter((livro) =>
        livro.nome.includes(textoDigitado)
      );
      setLivrosPesquisados(resultadoPesquisa);
    }
  };

  return (<PesquisaContainer>
    <Titulo>Já sabe por onde começar?</Titulo>
    <SubTitulo>Encontre seu livro em nossa estante.</SubTitulo>
    <Input 
        placeholder='Escreva sua próxima leitura.'
        onBlur={handleBlur}
    />
    { livrosPesquisados.map((livro) => (<Resultado>
      <img src={livro.src} alt="imagem-livro" />
      <span><p><strong>{livro.nome}</strong></p></span>
    </Resultado>)) }
  </PesquisaContainer>)
}

export default Pesquisa;
