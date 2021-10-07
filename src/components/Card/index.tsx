/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';
import * as S from './styles'
import { BsArrowRight } from 'react-icons/bs'
import { AtPickup, Delivered, InTransit, OutForDelivery, ReadyDelivery } from '../../assets';
import { ContainerWrapper } from '../Container';
import { useDate } from '../../libs/hooks/useDate';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { DelCard } from '..';
import { useDispatch } from 'react-redux';
import { openMotion } from '../../redux/actions/motionAction';

interface Props {
    data: any,
    name: string,
    id: number
}

const Card: FC<Props> = ({data, name, id}) => {
    const dispatch = useDispatch()

    const onToggle = () => {
        dispatch(openMotion())
    }

    return (
    <ContainerWrapper>
        <S.Wrapper onClick={onToggle}>
            <S.Title>
                <span>{data.carrier.name}</span>
                <div>{data.state.text}</div>
            </S.Title>

            <S.Info>
                <CopyToClipboard text={id}
                onCopy={() => alert('Copy')}>
                    <div className="deliveryId">{id}</div>
                </CopyToClipboard>
                <div>{name}</div>
            </S.Info>

            <S.Date>
                <div>Form {data.from.name}
                    <br />출발 : {useDate(data.from.time)}
                </div>
                <BsArrowRight />
                <div>To {data.to.name}
                    <br />도착 : {useDate(data.to.time)}
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