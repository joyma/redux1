import { ADD_SOLUTION } from "../constants/action-types";

const forbidden_words = [ 'agile', 'homogenous'];


export function forbiddenWordsMiddleware({ dispatch }) {
    return function(next){
      return function(action){
        // do your stuff
        if (action.type === ADD_SOLUTION) {
            const foundWord = forbidden_words.filter(word => action.payload.title.includes(word));
            if (foundWord.length) {
                return dispatch({type: "FOUND_BAD_WORD"});
            }
        }
        // end of logic
        return next(action);
      };
    };
}

