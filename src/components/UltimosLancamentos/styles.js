import styled from "styled-components";

export const UltimosLancamentosContainer = styled.section`
    background-color: #d1c4e9;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

export const NovosLivrosContainer = styled.div`
    margin: 30px 0;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
    space-between: 100px;

    img {
        width: 200px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        
    }
    
    img:hover {
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
`