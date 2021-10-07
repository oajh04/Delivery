import React from 'react';
import ModalBaseContainer from '../ModalBase';
import { BiErrorCircle } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { closeError } from '../../../redux/actions/errorModalAction';
import * as S from './styles'

const ErrorModal = () => {
  const dispatch = useDispatch();
  const { isError, errorMsg } = useSelector((state: RootState) => state.errorModalReducer)


  const onClose = () => {
    dispatch(closeError())
  }

  return (
    <>
        <ModalBaseContainer type='error' visibility={isError}>
          <S.Wrapper>
            <BiErrorCircle/>
            <div>{errorMsg}</div>
            <S.Button onClick={onClose}>닫기</S.Button>
          </S.Wrapper>
        </ModalBaseContainer>
    </>
  );
}

export default ErrorModal;