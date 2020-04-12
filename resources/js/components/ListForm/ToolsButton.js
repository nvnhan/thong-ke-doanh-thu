import React, { Fragment } from "react";
import { Button } from "antd";
import "./ToolsButton.scss";

/**
 * Dùng React.memo để lưu lại Component, ko bị load lại trừ trường hợp cần thiết
 */
const ToolsButton = React.memo(props => {
    return (
        <div className="tools-button">
            {props.insertable && (
                <Button type="primary" onClick={props.handleAddNew}>
                    Thêm mới
                </Button>
            )}
            {props.selectable &&
                props.deleteable &&
                props.selectedRowKeys.length > 0 && (
                    <Button type="danger" onClick={props.onMultiDelete}>
                        Xóa {props.selectedRowKeys.length} mục đã chọn
                    </Button>
                )}
        </div>
    );
});

export default ToolsButton;
