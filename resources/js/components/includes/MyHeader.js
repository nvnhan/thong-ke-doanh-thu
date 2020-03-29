import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader, Button } from 'antd';
import { connect } from "react-redux";

class MyHeader extends PureComponent {
    render () {
        return (
            <div>
                <PageHeader
                    style={{ background: "#fff" }}
                    onBack={() => window.history.back()}
                    title={this.props.title}
                />
            </div>
        );
    }
}


/**
 * Store trả state về thông qua connect
 * Connect dùng hàm này để map các state => props cho component
 */
const mapStatetoProps = state => {
	return {
		title: state.pageTitle
	};
};

/**
 * Connect của react-redux sẽ giao tiếp giữa store và component
 */
export default connect(mapStatetoProps)(MyHeader);