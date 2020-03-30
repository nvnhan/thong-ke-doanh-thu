import React, { Component } from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

export default class NotFound extends Component {
    render() {
        return (
            <Result
                status="404"
                title="404 - Not found!"
                subTitle="Rất tiếc, trang không tồn tại"
                extra={
                    <Button type="primary">
                        <Link to="/">Trang chủ</Link>
                    </Button>
                }
            />
        );
    }
}
