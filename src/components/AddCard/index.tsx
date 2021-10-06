import React from 'react';
import * as S from './styles'
import { BiPlusMedical } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/actions/addModalAction';
import { RootState } from '../../redux/reducers';
import { ContainerWrapper } from '../Container';

const AddCard = () => {
  const dispatch = useDispatch();

  const onOpenModal = () => {
    dispatch(openModal());
  }

  return (
    <>
      <ContainerWrapper>
        <S.Wrapper onClick={onOpenModal}>
          <BiPlusMedical />
        </S.Wrapper>
      </ContainerWrapper>  
    </>
  );
}

export default AddCard;