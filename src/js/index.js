import store from "./store/index";
import { addSolution, delSolution } from "./actions/index";

window.store = store;
window.addSolution = addSolution;
window.delSolution = delSolution;
