import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const preloadedState = localStorage.state ? JSON.parse(localStorage.state) : {}; 
  const store = configureStore(preloadedState);
  window.store = store;
  
});