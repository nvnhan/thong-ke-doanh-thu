import React, { PureComponent } from "react";
import { Switch, Route } from "react-router-dom";

import ListDatVe from "../DatVe/List";
import TrangChu from "../TrangChu";
import ListSanBay from "../SanBay/List";
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
