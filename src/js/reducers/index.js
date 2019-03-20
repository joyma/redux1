import { ADD_SOLUTION, DEL_SOLUTION} from "../constants/action-types";

const initialState = {
    solutions: [],
    remoteSolutions: []
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
    if (action.type === DEL_SOLUTION) {
        // deletes by matching the Id in the payloads
        return Object.assign(
            {}, 
            state, 
            {
                solutions: state.solutions.filter(item => item.id !== action.payload.id)
            }
        );
    }
    if (action.type === "DATA_LOADED") {
        return Object.assign({}, state, {
          remoteSolutions: state.remoteSolutions.concat(action.payload)
        });
      }
    return state;
}

export default rootReducer;