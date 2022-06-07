// this houses our action creators and action type constants
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";



export const recievedTodos = (todos) => {

    return {
    type : 'RECEIVE_TODOS',
    todos: todos
    }

}
export const recievedTodo = (todo) => {
    return {
    type : 'RECEIVE_TODO',
    todo : todo
    }
}

