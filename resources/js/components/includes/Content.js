import React, { PureComponent } from "react";
import { Switch, Route } from "react-router-dom";

import ListDatVe from "../dat-ve/List";
import TrangChu from "../trang-chu";
import ListSanBay from "../san-bay/List";
import NotFound from "./NotFound";

export default class Content extends PureComponent {
    render() {
        return (
            <div className="content">
                <Switch>
                    <Route exact path="/" component={TrangChu} />
                    {/* <Route path="/create" component={Add} /> */}
                    {/* <Route path="/edit/:id" component={Edit} /> */}
                    <Route path="/dat-ve" component={ListDatVe} />
                    <Route path="/san-bay" component={ListSanBay} />

                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}
