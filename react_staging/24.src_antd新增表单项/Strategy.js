import React, { Component } from 'react'
//import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Form, Select } from 'antd';

const { Option } = Select;

export default class Strategy extends Component {
    state = {}

    onFinish = (values) => {
        console.log('接收到的:', values);
    };

    render() {
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 4 }
        }
        const children = [];
        for (let i = 10; i < 36; i++) {
            children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }
        return (
            <div>
                <Form.Item name='aaa' label='aaa' {...formItemLayout}>
                    <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="Please select"
                        defaultValue={['a10', 'c12']}
                        onChange={this.props.handleChange}
                    >
                        {children}
                    </Select>
                </Form.Item>
            </div>
        )
    }
}

