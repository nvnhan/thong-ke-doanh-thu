import { Layout } from "antd";
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { createStore } from "redux";
import { myReducer } from "../reducers";
import Content from './includes/Content';
import MyFooter from './includes/MyFooter';
import MyHeader from './includes/MyHeader';
import SideBar from './SideBar';

export default class App extends PureComponent {
    
    render() {
        return (
            <BrowserRouter>
            {/* <Login /> */}
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