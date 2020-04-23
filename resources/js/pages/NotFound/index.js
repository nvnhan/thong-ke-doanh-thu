import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = React.memo(() => {
    return (
        <div className="not-found-content">
            <img src="/images/not-found.svg" />
            <h2>404 - Not Found!</h2>
            <p>Rất tiếc, không tìm thấy trang.</p>
            <Button type="primary">
                <Link to="/">Trang chủ</Link>
            </Button>
        </div>
    );
});

export default NotFound;
