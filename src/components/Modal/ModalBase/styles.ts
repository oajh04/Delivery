import { css } from '@emotion/react';
import styled from '@emotion/styled'

interface Props {
  height?: string,
  opacity?: number,
  visibility?: string,
  type?: string,
}

export const ModalBaseWrapper = styled.div<Props>`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  transition: all 0.6s;
  visibility: ${({ visibility }) => visibility};
  opacity: ${({ opacity }) => opacity};
`;

export const ModalBackgroud = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(249, 249, 249, 0.85);
`

export const ModalContent = styled.div<Props>`
  z-index: 10;
  max-width: 400px;
  width: 100%;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; 
  height: ${({ height }) => height};
  opacity: ${({ opacity }) => opacity};
  transition: all 0.8s;
`
