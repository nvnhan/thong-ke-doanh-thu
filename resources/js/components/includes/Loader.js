import React, { PureComponent } from 'react'
import { Spin } from 'antd'

export default class Loader extends PureComponent {
    render() {
        let s = "Đang tải dữ liệu";        
        if (this.props.tip)
            s = this.props.tip;
        return (
            <div>
                <Spin tip={s} />
            </div>
        )
    }
}
