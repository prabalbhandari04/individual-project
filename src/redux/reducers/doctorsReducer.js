import ACTIONS from '../actions/'

const doctors =[]

const doctorsReducer = (state = doctors, action) => {
    switch(action.type){
        case ACTIONS.GET_ALL_DOCTORS:
            return action.payload
        default:
            return state
    }
}

export default doctorsReducer