import React, { FC } from 'react';
import { ContainerWrapper } from '../Container';
import * as S from './styles'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { FcCancel } from 'react-icons/fc'
import { useDispatch } from 'react-redux';
import { closeMotion } from '../../redux/actions/motionAction';
import { delCard } from '../../redux/actions/cardAction';
import { useDeliveryId } from '../../libs/hooks/useDeliveryId';

interface Props {
  data: any,
  name: string,
  id: number,
  index: number,
}

const DelCard: FC<Props> = ({data, name, id, index}) => {
  const dispatch = useDispatch();
  const toggleId = useDeliveryId(id, index)

  const onDelete = () => {
    dispatch(delCard(id))
  }

  const onToggle = () => {
    dispatch(closeMotion(toggleId))
  }
  return (
    <>
        <ContainerWrapper >
            <S.Wrapper>
                <S.Button onClick={onDelete}>
                  <AiOutlineCloseCircle />
                  <span>닫기</span>
                </S.Button>
                <S.Button onClick={onToggle}>
                  <FcCancel />
                  <span>취소</span>
                </S.Button>
            </S.Wrapper>
        </ContainerWrapper>
    </>
  );
}

export default DelCard;