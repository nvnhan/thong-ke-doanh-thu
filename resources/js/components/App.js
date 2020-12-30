import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { myReducer } from "../reducers";
import MainContainer from "./MainContainer";
// import 'antd/dist/antd.css';

// Enable to use Redux dev tool in development mode
const composeEnhancers =
    "development" === process.env.NODE_ENV
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
        : compose;
// Use redux-thunk as a redux middleware
const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));
/**
 * Tạo 1 store cho cả APP
 * Dùng Provider để map toàn bộ APP
 */
const store = createStore(myReducer, {}, enhancer);

const App = () => {
    return (
        <BrowserRouter>
            <MainContainer />
        </BrowserRouter>
    );
};

export default App;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);
