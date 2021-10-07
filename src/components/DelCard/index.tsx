import React from 'react';
import { ContainerWrapper } from '../Container';
import * as S from './styles'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { FcCancel } from 'react-icons/fc'

const DelCard = () => {
  return (
    <>
        <ContainerWrapper >
            <S.Wrapper>
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