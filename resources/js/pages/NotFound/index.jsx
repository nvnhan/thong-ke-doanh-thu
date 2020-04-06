import { Button, Result } from "antd";
import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class NotFound extends PureComponent {    
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

export default NotFound;