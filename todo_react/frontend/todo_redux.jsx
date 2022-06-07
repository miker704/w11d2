import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/store.js";
// import {RECEIVE_TODO,RECEIVE_TODOS} from "./actions/todo_actions.js";
import { receiveTodos, receiveTodo } from "./actions/todo_actions.js";



document.addEventListener("DOMContentLoaded", () => {

    console.log("todoreduxlistener triggered");
    const store = configureStore();
    window.store = store;
    window.receiveTodos = receiveTodos;
    window.receiveTodo = receiveTodo;




    ReactDOM.render(
        <h1>Todo App in React && Redux</h1>,
        document.getElementById('content')
    );
});