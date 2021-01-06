import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../../actions";

const Container = memo(props => {
    const { menu, title, component, role } = props;
    const dispatch = useDispatch();
    const authUser = useSelector(state => state.authUser)

    const changeMenu = menu => dispatch(actions.changeMenu(menu));
    const changeTitle = title => dispatch(actions.changeTitle(title));

    if (role && authUser[role] !== true) return <Redirect to="/" />;

    useEffect(() => {
        menu !== undefined && changeMenu(menu);
        changeTitle(title);
    }, []);

    return component;
});

export default Container;
