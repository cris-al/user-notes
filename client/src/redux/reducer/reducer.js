import { LOGIN, REGISTER } from "../actions/actions";

const initialState = {
    user: {},
    notes: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN:
            return{
                ...state,
                user: action.data
            }
        
        case REGISTER:
            return{
                ...state
            }

        default:
            return state;
    }
}

export default reducer;