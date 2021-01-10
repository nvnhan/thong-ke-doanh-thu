import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import items from "./SideBarItems";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarContent
} from "react-pro-sidebar";
import image from "../../../asset/bg.webp";
import { toggleSidebar } from "../../actions";

const SideBar = memo(props => {
    const dispatch = useDispatch();
    const menuActive = useSelector(state => state.menuActive);
    const authUser = useSelector(state => state.authUser);
    const sideBarCollapsed = useSelector(state => state.sideBar.collapsed);
    const sideBarToggled = useSelector(state => state.sideBar.toggled);

    const onToggle = toggled => dispatch(toggleSidebar(toggled));

    const selectedSubMenu = () => "SUB_" + menuActive.split("_")[0];

    const genMenuItem = (item, index) => {
        if (item.role && authUser[item.role] !== true)
            return <React.Fragment key={item.key}></React.Fragment>;

        return (
            <MenuItem
                key={item.key}
                icon={item.icon}
                active={menuActive === item.key}
            >
                {item.title}
                <Link to={item.href} />
            </MenuItem>
        );
    };

    const genMenu = (item, index) => {
        if (item.role && authUser[item.role] !== true)
            return <React.Fragment key={item.key}></React.Fragment>;

        if (item.childs) {
            // Has childs
            return (
                <SubMenu
                    key={item.key}
                    icon={item.icon}
                    title={item.title}
                    defaultOpen={item.key === selectedSubMenu()}
                >
                    {item.childs.map(genMenuItem)}
                </SubMenu>
            );
        } else {
            return genMenuItem(item, index);
        }
    };

    const genSiderMenu = items => items.map(genMenu);

    return (
        <ProSidebar
            breakPoint="lg"
            image={image}
            collapsed={sideBarCollapsed}
            toggled={sideBarToggled}
            onToggle={onToggle}
        >
            <SidebarHeader>
                <div className="logo">
                    <img src="/images/logo.png" />
                    <span>TIENVE.NET</span>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="circle">{genSiderMenu(items)}</Menu>
            </SidebarContent>
        </ProSidebar>
    );
});

export default SideBar;
