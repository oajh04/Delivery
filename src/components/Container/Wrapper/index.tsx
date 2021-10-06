import React, { FC } from 'react';
import * as S from './styles'

interface Props{
    children: React.ReactNode
}


const ContainerWrapper: FC<Props> = ({children}) => {
  return (
    <S.ContainerWrapper>
        {children}
    </S.ContainerWrapper>
  );
}

export default ContainerWrapper;