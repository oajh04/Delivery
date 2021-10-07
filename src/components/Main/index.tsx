import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DelCard } from '..';
import { RootState } from '../../redux/reducers';
import Card from '../Card';
import { motion } from "framer-motion";
import * as S from './styles'
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const clickEvent = {
  opacity: 1,
  transition: 'all 0.2s linear',
}

const Main = () => {
  const [ toggle, setToggle ] =useState<boolean>(false)

  const data = useSelector((state: RootState)=> state.cardReducer.deliveres)

  return (
    <>
      {
        data?.map((i: any, index: React.Key | null | undefined) => {
          return (
            <motion.div
              key={index}
              onClick={() => setToggle(!toggle)}
              style={clickEvent}
              animate={toggle ? "active" : "inActive"}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              {
                !toggle ? <Card key={index} {...i}/>
                : <DelCard />
              }
            </motion.div>
          )
        })
      }
    </>
  );
}

export default Main;