import ACTIONS from './index'
import axios from 'axios'

export const dispatchDocLogin = () => {
    return {
        type: ACTIONS.DOCLOGIN
    }
}

export const fetchDoctor = async (token) => {
    const res = await axios.get('/doctor/docinfo', {
        headers: {Authorization: token}
    })
    return res
}

export const dispatchGetDoctor = (res) => {
    return {
        type: ACTIONS.GET_DOCTOR,
        payload: {
            doctor: res.data,
            isAdmin: res.data.role === 1 ? true : false
            
        }
    }
}
