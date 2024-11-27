import styled from "styled-components";

export const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #445fed 35%, #8594e6 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    width: 100%;
    min-height: 270px;
`

export const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

export const SubTitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

export const Resultado = styled.div`
    font-size: 16px;    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
    
    span {
        color: #000000;
    }

    &:hover {
        cursor: pointer;
        border: 1px solid #FFFFFF;
    }
    
    img {
        width: 100px;
    }
`