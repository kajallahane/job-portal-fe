import React from "react";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { hydrate, render } from "react-dom";
import { loadState, saveState } from './redux/localStorage';
import rootReducer from './redux/reducers'

const persistedState = loadState();
const store = createStore(rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  saveState({
    order: store.getState().order
  });
});

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<Provider store={store}><App /></Provider>, rootElement);
} else {
  render(<Provider store={store}><App /></Provider>, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
