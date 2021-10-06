import React, { ReactEventHandler, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carriers } from '../../../libs/Data/Carriers';
import { deliveryId, itemName, transportNumber } from '../../../redux/actions/addModalAction';
import { RootState } from '../../../redux/reducers';
import ModalBaseContainer from '../ModalBase';
import * as S from './styles'

const AddModal = () => {
  const dispatch = useDispatch()

  const onItemName = (e: any) => {
    dispatch(itemName(e.target.value))
  }
  const onTransportNumber = (e: any) => {
    dispatch(transportNumber(e.target.value))
  }
  const onDeliveryId = (e: any) => {
    dispatch(deliveryId(e.target.value))
  }

  return (
    <>
      <ModalBaseContainer>
        <S.Container>
          <S.Row>
            <S.Field>물건 이름</S.Field>
            <S.Input
              name="name"
              // value={itemNameState}
              onChange={onItemName}
              placeholder="구매한 물건 이름이나 요약"
            />
          </S.Row>
          <S.Row>
            <S.Field>운송장 번호</S.Field>
            <S.Input
              name="trackID"
              // value={transportNumberState}
              onChange={onTransportNumber}
              placeholder="숫자로만 이루어져 있어요"
              type="number"
            />
          </S.Row>
          <S.Row>
            <S.Field>택배사 이름</S.Field>
            <S.Select onChange={onDeliveryId}>
              <option selected>택배사</option>
              {
                Carriers.map((i, index) => {
                  return (
                    <option value={i.id} key={i.name}>{i.name}</option>
                  )
                })
              }
            </S.Select>
          </S.Row>
          <S.Button >추가하기</S.Button>
        </S.Container>
      </ModalBaseContainer>
    </>
  );
}

export default AddModal;