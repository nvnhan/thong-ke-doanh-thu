import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "./Loader";
import routes from "./routes";

export default function Content() {
    const getRoute = (routes) => {
        return routes.map((route, index) => {
            return (
                <Route
                    key={index}
                    exact={route.exact}
                    path={route.path}
                    component={() => route.component}
                />
            );
        });
    };

    return (
        <div className="content">
            <Suspense fallback={<Loader />}>
                <Switch>{getRoute(routes)}</Switch>
            </Suspense>
        </div>
    );
}
