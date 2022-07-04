import ACTIONS from './index'
import axios from 'axios'

export const fetchAllDoctors = async (token) => {
    const res = await axios.get('/doctor/allinfo', {
        headers: {Authorization: token}
    })
    return res
}

export const dispatchGetAllDoctors = (res) => {
    return {
        type: ACTIONS.GET_ALL_DOCTORS,
        payload: res.data
    }
}