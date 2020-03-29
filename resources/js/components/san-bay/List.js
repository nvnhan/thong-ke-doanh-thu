import React, { PureComponent } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as actions from "../../actions";
import * as menus from "../../constants/SideMenus";
import Loader from "../includes/Loader";
import { Table, Checkbox } from "antd";

class List extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: true
        };
        this.isComponentMounted = false;
    }

    componentDidMount() {
        this.isComponentMounted = true;
        this.props.onChangeMenu(menus.SAN_BAY);
        this.props.onChangeTitle("Sân bay");
        axios.get("/api/san-bay").then(response => {
            if (this.isComponentMounted && response.data.success)
                this.setState({
                    data: response.data.data,
                    isLoading: false
                });
        });
    }

    componentWillUnmount() {
        this.isComponentMounted = false;
    }

    deletePost = id => {
        // axios
        //     .post(`/api/posts/delete/${id}`)
        //     .then(response => {
        //         alert("Xoa thanh cong");
        //         this.setState({
        //             data: response.data
        //         });
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
    };

    render() {
        const { data, isLoading } = this.state;

        if (isLoading) return <Loader />;
        else {
            let newData = data.map((el, index) => {
                let o = Object.assign({}, el);
                o.key = o.ma_san_bay;
                //o.stt = index + 1;
                return o;
            });
            const phan_loai = [...new Set(data.map(x => x.phan_loai))];
            let filters = phan_loai.map(el => {
                return {
                    text: el,
                    value: el
                };
            });

            const columns = [
                // {
                //     title: "STT",
                //     dataIndex: "stt",
                //     key: "stt",
                //     render: text => <b>{text}</b>
                // },
                { title: "Mã sân bay", dataIndex: "ma_san_bay", key: "msb" },
                { title: "Tên sân bay", dataIndex: "ten_san_bay", key: "tsb" },
                {
                    title: "Khu vực",
                    dataIndex: "phan_loai",
                    key: "pl",
                    filters,
                    // specify the condition of filtering result
                    // here is that finding the name started with `value`
                    onFilter: (value, record) =>
                        record.phan_loai.indexOf(value) === 0
                },
                {
                    title: "Sân bay loại A",
                    dataIndex: "loai_a",
                    key: "la",
                    render: text => <Checkbox checked={text === 1} />
                }
            ];
            return <Table dataSource={newData} columns={columns} />;
        }
    }
}

/**
 * Store trả state về thông qua connect
 * Connect dùng hàm này để map các state => props cho component
 */
const mapStatetoProps = state => {
    return {};
};
/**
 * Map dispatch ==> Props
 * Gọi hàm ở  props + biến => dispatch 1 action nào đó
 */
const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeMenu: menu => {
            dispatch(actions.changeMenu(menu));
        },
        onChangeTitle: title => {
            dispatch(actions.changeTitle(title));
        }
    };
};

/**
 * Connect của react-redux sẽ giao tiếp giữa store và component
 */
export default connect(mapStatetoProps, mapDispatchToProps)(List);
