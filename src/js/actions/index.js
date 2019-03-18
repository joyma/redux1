import { ADD_SOLUTION } from "../constants/action-types";
import { DEL_SOLUTION } from "../constants/action-types";

export function addSolution(payload) {
  return { type: ADD_SOLUTION, payload };
}
export function delSolution(payload) {
  return { type: DEL_SOLUTION, payload };
}