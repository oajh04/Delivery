import React from 'react';
import { ContainerWrapper } from '../Container';
import * as S from './styles'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { FcCancel } from 'react-icons/fc'
import { useDispatch } from 'react-redux';
import { closeMotion } from '../../redux/actions/motionAction';

const DelCard = () => {
  const dispatch = useDispatch();

  const onToggle = () => {
    dispatch(closeMotion())
  }
  return (
    <>
        <ContainerWrapper >
            <S.Wrapper onClick={onToggle}>
                <S.Button>
                  <AiOutlineCloseCircle />
                  <span>닫기</span>
                </S.Button>
                <S.Button>
                  <FcCancel />
                  <span>취소</span>
                </S.Button>
            </S.Wrapper>
        </ContainerWrapper>
    </>
  );
}

export default DelCard;