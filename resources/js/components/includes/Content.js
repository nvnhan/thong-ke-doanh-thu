import React, { PureComponent, Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

const TrangChu = lazy(() => import("../TrangChu"));
const NotFound = lazy(() => import("./NotFound"));

const DatVe = lazy(() => import("../VeMayBay/DatVe"));
const SanBay = lazy(() => import("../VeMayBay/SanBay/test"));
const ThuePhi = lazy(() => import("../VeMayBay/ThuePhi/test"));
const PhiHanhLy = lazy(() => import("../VeMayBay/PhiHanhLy"));

export default class Content extends PureComponent {
    render() {
        return (
            <div className="content">
                <Suspense
                    fallback={
                        <div className="loading-screen">
                            <div className="ant-spin ant-spin-lg ant-spin-spinning">
                                <span className="ant-spin-dot ant-spin-dot-spin">
                                    <i className="ant-spin-dot-item"></i>
                                    <i className="ant-spin-dot-item"></i>
                                    <i className="ant-spin-dot-item"></i>
                                    <i className="ant-spin-dot-item"></i>
                                </span>
                            </div>
                        </div>
                    }
                >
                    <Switch>
                        <Route exact path="/" component={TrangChu} />

                        <Route path="/dat-ve" component={DatVe} />
                        <Route path="/san-bay" component={SanBay} />
                        <Route path="/thue-phi" component={ThuePhi} />
                        <Route path="/hanh-ly" component={PhiHanhLy} />

                        <Route component={NotFound} />
                    </Switch>
                </Suspense>
            </div>
        );
    }
}
