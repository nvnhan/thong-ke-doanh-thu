import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from "redux";
import { myReducer } from "../reducers";
import { Provider } from "react-redux";

// import 'antd/dist/antd.css';
import { Layout } from "antd";

import MyHeader from './includes/MyHeader';
import SideBar from './includes/SideBar';
import Content from './includes/Content';
import MyFooter from './includes/MyFooter';

export default class App extends PureComponent {
    
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <SideBar />
                    <Layout>
                        <MyHeader />
                        <Content />
                        <MyFooter />
                    </Layout>
                </Layout>
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