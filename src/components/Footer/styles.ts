import styled from '@emotion/styled'

export const Footer = styled.div`
    margin: 0 auto;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -110%);
    div{
        font-size: 10px;
        font-family: 'CookieRunRegular';
        text-align: center;
    }
    a{
        color: red
    }
    width: 100%;
    max-width: 400px;
    min-width: 300px;
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

export const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
`

export const Description = styled.div`
    width: 50px;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 5px;
    a{
        color: black;
    }
    svg{
        padding: 3px;
        border-radius: 50%;
        border: 0.3px solid black;
        width: 40px;
        height: 40px;
        margin-bottom: 3px;
    }
`