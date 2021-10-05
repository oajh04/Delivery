import styled from '@emotion/styled'

export const Wrapper = styled.div`
    max-width: 400px;
    min-width: 300px;
    height: 128px;
    width: 100%;
    margin: 0 auto;
    border-radius: 8px;
    border: dashed 2px black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg{
        width: 40px;
        height: 40px;
    }
    @media screen and (max-width: 430px) { 
        width: 350px;
    }
    @media screen and (max-width: 370px) { 
        width: 320px;
    }
    @media screen and (max-width: 330px) { 
        width: 300px;
    }


`