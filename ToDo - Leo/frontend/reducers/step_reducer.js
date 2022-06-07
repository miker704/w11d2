import {
  RECEIVE_STEPS,
  RECEIVE_STEP,
  REMOVE_STEP
} from '../actions/step_actions.js';

// const initialState = {
//   1: { 
//     id: 1,
//       title: 'walk to store',
//         done: false,
//           todo_id: 1
//   },
//   2: { 
//     id: 2,
//       title: 'buy soap',
//         done: false,
//           todo_id: 1
//   }
// }

const stepsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_STEPS:
      action.steps.forEach(step => {
        nextState[step.id] = step;
      });
      return nextState;
    case RECEIVE_STEP:
      const newStep = {[action.step.id]: action.step};
      nextState = Object.assign({}, state, newStep);
      return nextState;
    case REMOVE_STEP:
      delete nextState[action.step.id];
      return nextState;
    default:
      return state;
  }
}

export default stepsReducer;