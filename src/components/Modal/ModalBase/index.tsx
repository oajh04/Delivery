import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal } from '../../../redux/actions/addModalAction';
import { RootState } from '../../../redux/reducers';
import * as S from './styles'

interface Props {
    children: React.ReactNode
}

const ModalBaseContainer: FC<Props> = ({children}) => {
    const dispatch = useDispatch();
    const {visibility, height, opacity} = useSelector((state: RootState) => state.addModalReducer)

    const onCloseModal = () => {
        dispatch(closeModal());
    }

    return (
        <>
            <S.ModalBaseWrapper visibility={visibility} opacity={opacity}>
                <S.ModalBackgroud onClick={onCloseModal} />
                <S.ModalContent height={height} opacity={opacity}>{children}</S.ModalContent>
            </S.ModalBaseWrapper>
        </>
    );
}

export default ModalBaseContainer;