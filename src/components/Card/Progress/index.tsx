/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';
import { AtPickup, Delivered, InTransit, OutForDelivery, ReadyDelivery } from '../../../assets';
import { tracks } from '../../../libs/Data/tracks';
import * as S from './styles'

interface Props {
    stateId: string,
    progresses: any[],
}

interface SvgProps {
    stateId: string,
    progresses: any[],
    data: any
}

const Svg: FC<SvgProps> = ({data, stateId, progresses}) => {

    return (
        <S.SvgWrapper>
            <img src={data.svg.src} alt={data.text}/>
            <S.Text selected={stateId === data.id}>{data.text}</S.Text>
        </S.SvgWrapper>
    )
}

const Progress: FC<Props> = ({ stateId, progresses }) => {

    return (
        <>
            <S.Progresses>
                {
                    tracks.map((data, index) => {
                        return (
                            <Svg
                                key={`svg-${index + 1}`}
                                data={data}
                                stateId={stateId}
                                progresses={progresses}
                            />
                        )
                    })
                }
            </S.Progresses>
        </>
    );
}

export default Progress;
