import React from 'react'
import {Button} from 'antd'
/**
 * Dùng React.memo để lưu lại Component, ko bị load lại trừ trường hợp cần thiết
 */
const ToolsButton = React.memo((props) => {
    return (
        <div className="tools-button">
            {props.insertable ? (
                <Button type="primary" onClick={props.handleAddNew}>
                    Thêm mới
                </Button>
            ) : (
                ""
            )}
            {props.selectable && props.deleteable ? (
                <div style={{ display: "inline" }}>
                    {props.selectedRowKeys.length > 0 ? (
                        <Button type="danger" onClick={props.onMultiDelete}>
                            Xóa {props.selectedRowKeys.length} mục đã chọn
                        </Button>
                    ) : (
                        ""
                    )}
                    <Button type="link" onClick={props.handleSelectAll}>
                        Chọn tất cả
                    </Button>
                    <Button
                        type="link"
                        danger
                        onClick={props.handleClearSelected}
                    >
                        Bỏ chọn tất cả
                    </Button>
                </div>
            ) : (
                ""
            )}
        </div>
    );
});

export default ToolsButton