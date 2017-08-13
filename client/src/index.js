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

const store = createStore(rootReducer, {},
    applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
);
