import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { receiveTodo, receiveTodos, removeTodo } from './actions/todo_actions.js';
import { receiveStep, receiveSteps, removeStep } from './actions/step_actions.js';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  
  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.removeTodo = removeTodo;

  window.receiveStep = receiveStep;
  window.receiveSteps = receiveSteps;
  window.removeStep = removeStep;
});