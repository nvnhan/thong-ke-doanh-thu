import React from "react";
import { Switch, Route } from 'react-router-dom';

// import Add from '../posts/Add';
import List from '../dat-ve/List';
import TrangChu from '../trang-chu'
// import Edit from "../posts/Edit";

export default class Content extends React.Component {
    render() {
        return (
            <div
                style={{
                    margin: "24px 16px 0",
                    padding: 24,
                    background: "#fff",
                    textAlign: "center"
                }}
            >
                <Switch>
                    <Route exact path="/" component={TrangChu} />
                    {/* <Route path="/create" component={Add} /> */}
                    {/* <Route path="/edit/:id" component={Edit} /> */}
                    <Route path="/dat-ve" component={List} />
                </Switch>
            </div>
        );
    }
}
