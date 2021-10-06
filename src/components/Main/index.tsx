import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import Card from '../Card';
import * as S from './styles'

const Main = () => {

  const data = useSelector((state: RootState)=> state.cardReducer.deliveres)

  return (
    <>
      {
        data?.map((i: any, index: React.Key | null | undefined) => {
          return (
            <Card key={index} {...i}/>
          )
        })
      }
    </>
  );
}

export default Main;