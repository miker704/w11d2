import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore(); 
  
  const root = document.querySelector('#content');
  ReactDOM.render(<Root store={store} />, root);
});