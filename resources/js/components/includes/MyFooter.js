import React, { PureComponent } from "react";
import { Layout } from "antd";

export default class MyFooter extends PureComponent {
    render() {
        return (
            <Layout.Footer style={{ textAlign: "center" }}>
                Ant Design ©2018 Created by Ant UED, Modified by NVNhan 2020
            </Layout.Footer>
        );
    }
}
