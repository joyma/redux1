import { ADD_SOLUTION } from "../constants/action-types";
import { DEL_SOLUTION } from "../constants/action-types";

export function addSolution(payload) {
  return { type: ADD_SOLUTION, payload };
}
export function delSolution(payload) {
  return { type: DEL_SOLUTION, payload };
}

export function getSolutions() {
  return function(dispatch) {
    return fetch("http://localhost:3000/solutions")
    .then(response => response.json())
    .then(json => {
      dispatch({ type: "DATA_LOADED", payload: json });
    });
  };
}