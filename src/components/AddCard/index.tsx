import React from 'react';
import * as S from './styles'
import { BiPlusMedical } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/actions/addModalAction';
import { RootState } from '../../redux/reducers';
import { ContainerWrapper } from '../Container';
import { motion } from 'framer-motion'

const AddCard = () => {
  const dispatch = useDispatch();

  const onOpenModal = () => {
    dispatch(openModal());
  }

  return (
    <>
      <ContainerWrapper>
        <motion.div
          whileHover={{ scale: 1.2 }}
          onClick={onOpenModal}
          whileTap={{ scale: 0.95 }}
        >
          <S.Wrapper>
            <BiPlusMedical />
          </S.Wrapper>
        </motion.div>
      </ContainerWrapper>  
    </>
  );
}

export default AddCard;