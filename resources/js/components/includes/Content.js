import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Container from "./Container";
import Loader from "./Loader";
import routes from "./routes";

const Content = React.memo(() => {
    const getRoute = routes =>
        routes.map((route, index) => {
            return (
                <Route
                    key={index}
                    exact={route.exact}
                    path={route.path}
                    component={() => (
                        <Container
                            component={route.component}
                            role={route.role}
                            title={route.title}
                            menu={route.menu}
                        />
                    )}
                />
            );
        });

    return (
        <div className="content">
            <Suspense fallback={<Loader />}>
                <Switch>{getRoute(routes)}</Switch>
            </Suspense>
        </div>
    );
});

export default Content;
