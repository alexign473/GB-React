import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 1. Установить redux, react-redux.
import { createStore } from 'redux'
import { Provider } from 'react-redux';

const defaultState = {
  checked: true,
}

// 2. Создать редьюсер профиля.
// action = { type: '', payload: '?' }
const profileReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHECK':
      return { ...state, checked: action.payload }
    default:
      return state
  }
}

let store = createStore(profileReducer)
store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);


