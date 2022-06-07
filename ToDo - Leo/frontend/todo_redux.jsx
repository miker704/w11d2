import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { receiveTodo, receiveTodos } from './actions/todo_actions.js';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  
  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
});