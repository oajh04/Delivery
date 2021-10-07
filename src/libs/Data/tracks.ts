import { AtPickup, Delivered, InTransit, OutForDelivery, ReadyDelivery } from '../../assets';

export const tracks = [
    {
      id: "information_received",
      svg: ReadyDelivery,
      text: "상품준비중"
    },
    {
      id: "at_pickup",
      svg: AtPickup,
      text: "상품인수"
    },
    {
      id: "in_transit",
      svg: InTransit,
      text: "상품이동중"
    },
    {
      id: "out_for_delivery",
      svg: OutForDelivery,
      text: "배송출발"
    },
    {
      id: "delivered",
      svg: Delivered,
      text: "배달완료"
    }
  ]