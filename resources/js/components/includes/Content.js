import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Loader from "./Loader";

const TrangChu = lazy(() => import("../../pages/TrangChu"));
const NotFound = lazy(() => import("./NotFound"));

const DatVe = lazy(() => import("../../pages/VeMayBay/DatVe"));
const SanBay = lazy(() => import("../../pages/VeMayBay/SanBay"));
const ThuePhi = lazy(() => import("../../pages/VeMayBay/ThuePhi"));
const PhiHanhLy = lazy(() => import("../../pages/VeMayBay/PhiHanhLy"));

const TaiKhoan = lazy(() => import("../../pages/ThongTin/TaiKhoan"));
const KhachHang = lazy(() => import("../../pages/ThongTin/KhachHang"));

export default function Content() {
    return (
        <div className="content">
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route exact path="/" component={TrangChu} />

                    <Route path="/dat-ve" component={DatVe} />
                    <Route path="/san-bay" component={SanBay} />
                    <Route path="/thue-phi" component={ThuePhi} />
                    <Route path="/phi-hanh-ly" component={PhiHanhLy} />

                    <Route path="/tai-khoan" component={TaiKhoan} />
                    <Route path="/khach-hang" component={KhachHang} />

                    <Route component={NotFound} />
                </Switch>
            </Suspense>
        </div>
    );
}
