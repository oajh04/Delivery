/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DelCard } from '..';
import { RootState } from '../../redux/reducers';
import Card from '../Card';
import { motion } from "framer-motion";
import { useDeliveryId } from '../../libs/hooks/useDeliveryId';

const Main = () => {
  const {toggle, toggleId} = useSelector((state: RootState) => state.motionReducer)
  console.log(toggleId)

  const data = useSelector((state: RootState)=> state.cardReducer.deliveres)

  return (
    <>
      {
        data?.map((i: any, index: number) => {
          return (
            <motion.div
              key={index}
              whileTap={{ scale: 0.95 }}
            >
              {
                !toggle || useDeliveryId(i.id, index) !== toggleId ? <Card key={index} {...i} index={index}/>
                : <DelCard {...i} index={index}/>
              }
            </motion.div>
          )
        })
      }
    </>
  );
}

export default Main;