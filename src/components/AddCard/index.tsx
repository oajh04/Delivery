import React from 'react';
import * as S from './styles'
import { BiPlusMedical } from 'react-icons/bi'
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/actions/addModalAction';

const AddCard = () => {
  const dispatch = useDispatch();

  const onOpenModal = () => {
    dispatch(openModal());
  }

  return (
    <>
        <S.Wrapper onClick={onOpenModal}>
          <BiPlusMedical />
        </S.Wrapper>
    </>
  );
}

export default AddCard;