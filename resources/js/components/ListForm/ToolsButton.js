import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";
import React from "react";
import "./ToolsButton.scss";

/**
 * Dùng React.memo để lưu lại Component, ko bị load lại trừ trường hợp cần thiết
 */
const ToolsButton = React.memo(props => {
    const {
        handleAddNew,
        insertable,
        selectedRowKeys,
        data,
        otherButtons,
        onMultiDelete,
        selectable,
        deleteable
    } = props;

    const renderUngroupButtons = () => {
        const ungroupButtons = otherButtons.filter(btn => !btn.isGroup);
        return ungroupButtons.map(btn => (
            <Button
                type="default"
                key={btn.key}
                icon={btn.icon}
                onClick={() => btn.onClick(data, selectedRowKeys)}
            >
                {btn.title}
            </Button>
        ));
    };

    const layButtons = () => {
        const groupButtons = otherButtons.filter(btn => btn.isGroup);
        return (
            <Menu>
                {groupButtons.map(btn => (
                    <Menu.Item
                        key={btn.key}
                        onClick={() => btn.onClick(data, selectedRowKeys)}
                        style={{
                            color: btn.color
                        }}
                    >
                        {btn.icon} {btn.title}
                    </Menu.Item>
                ))}
            </Menu>
        );
    };

    return (
        <div className="tools-button">
            {insertable && (
                <Button type="primary" onClick={handleAddNew}>
                    Thêm mới
                </Button>
            )}
            {selectable && deleteable && selectedRowKeys.length > 0 && (
                <Button type="danger" onClick={onMultiDelete}>
                    Xóa {selectedRowKeys.length} mục đã chọn
                </Button>
            )}
            {selectable &&
                selectedRowKeys.length > 0 &&
                otherButtons !== undefined && (
                    <React.Fragment>
                        {renderUngroupButtons()}
                        <Dropdown overlay={layButtons()}>
                            <Button>
                                Thêm chức năng <DownOutlined />
                            </Button>
                        </Dropdown>
                    </React.Fragment>
                )}
        </div>
    );
});

export default ToolsButton;
