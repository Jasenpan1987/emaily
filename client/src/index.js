import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import "materialize-css/dist/css/materialize.min.css";

import App from "./components/App";
import rootReducer from "./reducers";
// remove package-lock.json in client directory
// run npm install

import axios from "axios";
window.axios = axios;

const store = createStore(rootReducer, {},
    applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
);
console.log("strip key: ", process.env.REACT_APP_STRIPE_KEY);
console.log("enviornment: ", process.env.NODE_ENV);