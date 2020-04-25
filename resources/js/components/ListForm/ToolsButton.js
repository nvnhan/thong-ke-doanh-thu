import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Divider } from "antd";
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
    const isSelected =
        selectedRowKeys !== undefined && selectedRowKeys.length > 0;

    const renderButtons = () => {
        return otherButtons.map(btn => {
            if (
                btn.childs === undefined &&
                (btn.selectRequired === false || isSelected)
            )
                return (
                    <Button
                        type="default"
                        key={btn.key}
                        icon={btn.icon}
                        onClick={() => btn.onClick(data, selectedRowKeys)}
                    >
                        {btn.title}
                    </Button>
                );
            else if (btn.selectRequired === false || isSelected)
                return (
                    <Dropdown key={btn.key} overlay={layButtons(btn.childs)}>
                        <Button icon={btn.icon}>
                            {btn.title} <DownOutlined />
                        </Button>
                    </Dropdown>
                );
            return "";
        });
    };

    const layButtons = childs => {
        return (
            <Menu>
                {childs.map(btn => {
                    if (btn.selectRequired === false || isSelected) {
                        // Không có child
                        if (btn.childs === undefined)
                            return (
                                <Menu.Item
                                    key={btn.key}
                                    onClick={() =>
                                        btn.onClick(data, selectedRowKeys)
                                    }
                                >
                                    {btn.title}
                                </Menu.Item>
                            );
                        // Map tiếp để tạo các submenu items
                        else
                            return (
                                <Menu.SubMenu title={btn.title} key={btn.key}>
                                    {btn.childs.map(btn1 => (
                                        <Menu.Item
                                            key={btn1.key}
                                            onClick={() =>
                                                btn1.onClick(
                                                    data,
                                                    selectedRowKeys
                                                )
                                            }
                                        >
                                            {btn1.title}
                                        </Menu.Item>
                                    ))}
                                </Menu.SubMenu>
                            );
                    }
                    return "";
                })}
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
            {otherButtons !== undefined && renderButtons()}
            {selectable && deleteable && isSelected && (
                <>
                    <Divider type="vertical" />
                    <Button type="link" danger onClick={onMultiDelete}>
                        Xóa {selectedRowKeys.length} mục đã chọn
                    </Button>
                </>
            )}
        </div>
    );
});

export default ToolsButton;
