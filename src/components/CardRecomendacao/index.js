import React from 'react'
import { Card, Subtitulo, Descricao, ImgLivro, Botao} from './styles';
import { Titulo } from '../Titulo/index';

const CardRecomendacao = ({titulo, subtitulo, descricao, img}) => {
  return (
    <Card>
        <div>
            <Titulo 
                alinhamento="start"
                tamanhoFonte="18px"
                cor="#EB9B00"
            >
                {titulo}
            </Titulo>
            <Subtitulo>{subtitulo}</Subtitulo>
            <Descricao>{descricao}</Descricao>
        </div>
        <div>
            <ImgLivro alt="indicação-img" src={img}/>
            <Botao>Saiba mais</Botao>
        </div>
    </Card>
  )
}

export default CardRecomendacao;
