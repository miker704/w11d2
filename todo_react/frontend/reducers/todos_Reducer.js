import {
    RECEIVE_TODOS,
    RECEIVE_TODO
} from '../actions/todo_actions.js';




const todosReducer = (state ={}, action) => {
    Object.freeze(state);
    // let nextState;
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_TODOS:
            nextState[action.todos.id] = action.todos;
            return nextState;
        case RECEIVE_TODO:
            nextState[action.todo.id] = action.todo;
            return nextState;
        default:
            return state;
    }
};

const initialState = {
    1: {
      id: 1,
      title: "wash car",
      body: "with soap",
      done: false
    },
    2: {
      id: 2,
      title: "wash dog",
      body: "with shampoo",
      done: true
    }
  };
export default todosReducer;