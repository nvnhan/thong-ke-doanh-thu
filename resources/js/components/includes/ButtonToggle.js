import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuOutlined from "@ant-design/icons/MenuOutlined";
import { toggleSidebar } from "../../actions";

const ButtonToogle = React.memo(() => {
    const sideBarToggled = useSelector(state => state.sideBar.toggled);
    const dispatch = useDispatch();

    const onClick = () => dispatch(toggleSidebar(!sideBarToggled));

    return (
        <div className="btn-toggle" onClick={onClick}>
            <MenuOutlined />
        </div>
    );
});

export default ButtonToogle;
