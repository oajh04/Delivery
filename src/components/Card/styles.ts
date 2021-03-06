import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
    height: 250px;
    padding: 9px 11px;
    border: 0.1px solid black;
    border-radius: 8px;
    font-family: 'CookieRunRegular';
    margin: 0 auto;
    transition: all 0.5s linear;
`

export const Title = styled.div`
    width: 100%;
    height: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    span {
        font-family: 'CookieRunBold';
        font-size: 18px;
    }
    div{
        width: 85px;
        height: 25px;
        text-align: center;
        padding: 3px;
        background-color: #333333;
        border-radius: 10px;
        color: white;
        font-size: 13px;
        font-family: 'CookieRunRegular';
    }
`

export const Info = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
    div{
        font-size: 15px;
        font-family: 'CookieRunRegular';
    }
    .deliveryId{
        cursor: pointer;
    }
`

export const Date = styled.div`
    width: 100%;
    height: 56px;
    justify-content: space-around;
    border: 0.2px solid black;
    display: flex;
    align-items: center;
    margin-bottom: 14px;
    div{
        font-size: 13px;
        font-family: 'CookieRunRegular';
    }
`