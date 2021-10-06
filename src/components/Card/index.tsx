/* eslint-disable @next/next/no-img-element */
import React from 'react';
import * as S from './styles'
import { BsArrowRight } from 'react-icons/bs'
import { AtPickup, Delivered, InTransit, OutForDelivery, ReadyDelivery } from '../../assets';
import { ContainerWrapper } from '../Container';

const Card = () => {
    return (
    <ContainerWrapper>
        <S.Wrapper>
            <S.Title>
                <span>CWAY (Woori Express)</span>
                <div>상품준비중</div>
            </S.Title>

            <S.Info>
                <div>642382102564</div>
                <div>aisjdoiajdaoisd</div>
            </S.Info>

            <S.Date>
                <div>Form 옥*
                    <br />출발 : 2021.12.12
                </div>
                <BsArrowRight />
                <div>Form 옥*
                    <br />출발 : 2021.12.12
                </div>
            </S.Date>

            <S.Progresses>
                <div>
                    <img src={ReadyDelivery.src} alt="상품인수"/>
                    <span>상품준비중</span>
                </div>
                <div>
                    <img src={AtPickup.src} alt="상품인수"/>
                    <span>상품인수</span>
                </div>
                <div>
                    <img src={InTransit.src} alt="상품이동중"/>
                    <span>상품이동중</span>
                </div>
                <div>
                    <img src={OutForDelivery.src} alt="배송출발"/>
                    <span>배송출발</span>
                </div>
                <div>
                    <img src={Delivered.src} alt="배달완료"/>
                    <span>배달완료</span>
                </div>
            </S.Progresses>
        </S.Wrapper>
    </ContainerWrapper>
  );
}

export default Card;