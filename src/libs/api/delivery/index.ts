/* eslint-disable import/no-anonymous-default-export */
import request from '../../axios'

export default{
    getData(carrier_id: string, track_id: number){
        return request({
            url : `/carriers/${carrier_id}/tracks/${track_id}`,
            method : 'get',
        })
    },
}