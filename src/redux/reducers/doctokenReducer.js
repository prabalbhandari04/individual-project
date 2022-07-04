import ACTIONS from '../actions/'

const doctoken = ''

const doctokenReducer = (state = doctoken, action) => {
    switch(action.type){
        case ACTIONS.GET_DOCTOKEN:
            return action.payload
        default:
            return state
    }
}

export default doctokenReducer