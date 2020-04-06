import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { myReducer } from "../reducers";
import MainContainer from "./MainContainer";
import { BrowserRouter } from "react-router-dom";

export default class App extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <MainContainer />
            </BrowserRouter>
        );
    }
}

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
