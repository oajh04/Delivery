import styled from '@emotion/styled'

export const Footer = styled.div`
    div{
        font-size: 10px;
        font-family: 'CookieRunRegular';
        text-align: center;
    }
    a{
        color: red
    }
`

export const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const Description = styled.div`
    width: 51px;
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