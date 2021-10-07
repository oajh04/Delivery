import styled from "@emotion/styled";

export const Wrapper = styled.div`
    height: 250px;
    padding: 9px 11px;
    border-radius: 8px;
    font-family: 'CookieRunRegular';
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    svg{
        width: 80px;
        height: 80px;
        color: #FF0000;
    }
`

export const Button = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    border-radius: 4px;
    cursor: pointer;
    color: white;
    padding: 0.5rem 0;
    background-color: #333333;
    outline: none;
    border: none;
`