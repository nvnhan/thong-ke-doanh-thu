import React, { PureComponent } from "react";
import { Switch, Route } from 'react-router-dom';

import ListDatVe from '../dat-ve/List';
import TrangChu from '../trang-chu';
import ListSanBay from '../san-bay/List'

export default class Content extends PureComponent {
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
                    <Route path="/dat-ve" component={ListDatVe} />
                    <Route path="/san-bay" component={ListSanBay} />
                </Switch>
            </div>
        );
    }
}
