import ACTIONS from '../actions'

const initialState = {
    doctor: [],
    isDocLogged: false,
    isAdmin: false
}

const docauthReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTIONS.DOCLOGIN:
            return {
                ...state,
                isDocLogged: true
            }
         
        case ACTIONS.GET_DOCTOR:
                return {
                    ...state,
                    doctor: action.payload.doctor,
                    isAdmin: action.payload.isAdmin
                }
            default:
                return state
    }
}

export default docauthReducer