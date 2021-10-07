import React, { ReactEventHandler, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import delivery from '../../../libs/api/delivery';
import { Carriers } from '../../../libs/Data/Carriers';
import { resetModal, deliveryId, itemName, transportNumber, closeModal } from '../../../redux/actions/addModalAction';
import { addCard } from '../../../redux/actions/cardAction';
import { openError } from '../../../redux/actions/errorModalAction';
import { RootState } from '../../../redux/reducers';
import ModalBaseContainer from '../ModalBase';
import * as S from './styles'

const AddModal = () => {
  const dispatch = useDispatch()

  const { itemNameState, transportNumberState, deliveryIdState, visibility, height, opacity } = useSelector((state: RootState) => state.addModalReducer)

  const onItemName = (e: any) => {
    dispatch(itemName(e.target.value))
  }
  const onTransportNumber = (e: any) => {
    dispatch(transportNumber(e.target.value))
  }
  const onDeliveryId = (e: any) => {
    dispatch(deliveryId(e.target.value))
  }

  const onGetData = () => {
    if(!itemNameState || !transportNumberState || !deliveryIdState){
      dispatch(openError('빈칸을 전부 입력해주세요!'))
      return;
    }
    delivery.getData(deliveryIdState, transportNumberState)
    .then((res) => {
      const resData = {
        data: res.data,
        name: itemNameState,
        id: transportNumberState,
      }
      dispatch(addCard(resData))
      dispatch(resetModal())
      dispatch(closeModal())
    })
    .catch((err) => {
      const message = err.response.data.message
      dispatch(openError(message))
    })
  }

  return (
    <>
      <ModalBaseContainer visibility={visibility} height={height} opacity={opacity} type='add'>
        <S.Container>
          <S.Row>
            <S.Text>물건 이름</S.Text>
            <S.Input
              name="name"
              value={itemNameState}
              onChange={onItemName}
              placeholder="구매한 물건의 이름"
            />
          </S.Row>
          <S.Row>
            <S.Text>운송장 번호</S.Text>
            <S.Input
              name="trackID"
              onChange={onTransportNumber}
              placeholder="숫자로 작성해 주세요"
              type="number"
            />
          </S.Row>
          <S.Row>
            <S.Text>택배사 이름</S.Text>
            <S.Select onChange={onDeliveryId} >
              <option value="DEFAULT" disabled>택배사</option>
              {
                Carriers.map((i, index) => {
                  return (
                    <option value={i.id} key={i.name}>{i.name}</option>
                  )
                })
              }
            </S.Select>
          </S.Row>
          <S.Button onClick={onGetData}>추가하기</S.Button>
        </S.Container>
      </ModalBaseContainer>
    </>
  );
}

export default AddModal;