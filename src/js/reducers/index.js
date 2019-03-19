import { ADD_SOLUTION, DEL_SOLUTION} from "../constants/action-types";

const initialState = {
    solutions: []
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_SOLUTION) {
        return Object.assign(
            {}, 
            state, 
            {
                solutions: state.solutions.concat(action.payload)
            }
        );
    }
    else if (action.type === DEL_SOLUTION) {
        // deletes by matching the Id in the payloads
        return Object.assign(
            {}, 
            state, 
            {
                solutions: state.solutions.filter(item => item.id !== action.payload.id)
            }
        );
    }
    return state;
}

export default rootReducer;