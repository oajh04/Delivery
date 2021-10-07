import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../redux/actions/addModalAction';
import { closeError } from '../../../redux/actions/errorModalAction';
import { RootState } from '../../../redux/reducers';
import * as S from './styles'

interface Props {
    children: React.ReactNode,
    visibility: string,
    opacity?: number,
    height?: string,
    type: string
}

const ModalBaseContainer: FC<Props> = ({children, visibility, opacity, height, type}) => {
    const dispatch = useDispatch();

    const onCloseModal = () => {
        if(type === 'add'){
            dispatch(closeModal());
        }
    }

    return (
        <>
            <S.ModalBaseWrapper visibility={visibility} opacity={opacity} type={type}>
                <S.ModalBackgroud onClick={onCloseModal} />
                <S.ModalContent height={height} opacity={opacity}>{children}</S.ModalContent>
            </S.ModalBaseWrapper>
        </>
    );
}

export default ModalBaseContainer;