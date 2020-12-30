import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { myReducer } from "../reducers";
import MainContainer from "./MainContainer";
// import 'antd/dist/antd.css';

const App = () => {
    return (
        <BrowserRouter>
            <MainContainer />
        </BrowserRouter>
    );
};

export default App;

/**
 * Tạo 1 store cho cả APP
 * Dùng Provider để map toàn bộ APP
 */
const store = createStore(
    myReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);
