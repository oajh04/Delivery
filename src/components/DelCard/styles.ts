import styled from "@emotion/styled";

export const Wrapper = styled.div`
    height: 250px;
    padding: 9px 11px;
    border: 0.1px solid black;
    border-radius: 8px;
    font-family: 'CookieRunRegular';
    margin: 0 auto;
    transition: all 0.5s linear;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
`

export const Button = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    cursor: pointer;
    svg {
        margin-bottom: 5px;
        width: 50px;
        height: 50px;
    }
`