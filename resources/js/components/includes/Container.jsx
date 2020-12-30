import { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../actions";

const Container = memo(props => {
    const { menu, title, component } = props;
    const dispatch = useDispatch();

    const changeMenu = menu => dispatch(actions.changeMenu(menu));
    const changeTitle = title => dispatch(actions.changeTitle(title));

    useEffect(() => {
        if (menu !== undefined) changeMenu(menu);
        changeTitle(title);
    }, []);

    return component;
});

export default Container;
