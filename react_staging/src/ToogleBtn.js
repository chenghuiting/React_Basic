import React, { Component } from "react";
//import { Icon } from 'antd';//antd^3
import { DownOutlined, UpOutlined } from "@ant-design/icons";


// export default function ToogleBtn({ onToogle, expand, children }) {
//     return (
//         <a onClick={onToogle} style={{ lineHeight: '32px' }}>
//             {expand ? `折叠${children ? children : ''}` : `展开${children ? children : ''}`}
//             <Icon type={expand ? 'up' : 'dowm'} style={{ marginLeft: 5 }} />
//         </a>
//     )
// }

export default function ToogleBtn({ onToogle, expand, children }) {
    return (
        <a onClick={onToogle} style={{ lineHeight: '32px' }}>
            {expand ? `折叠${children ? children : ''}` : `展开${children ? children : ''}`}
            {expand ? <UpOutlined /> : <DownOutlined />}
        </a>
    )
}