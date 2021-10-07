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
import { useDeliveryId } from '../../libs/hooks/useDeliveryId';
import Progress from './Progress';

interface Props {
    data: any,
    name: string,
    id: number,
    index: number,
}

const Card: FC<Props> = ({data, name, id, index}) => {
    const dispatch = useDispatch()
    const toggleId = useDeliveryId(id, index)

    const onToggle = () => {
        dispatch(openMotion(toggleId))
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

            <Progress progresses={data.progresses} stateId={data.state.id} />
        </S.Wrapper>
    </ContainerWrapper>
  );
}

export default Card;