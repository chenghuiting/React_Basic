import React, { Component } from 'react';
import { Button, Form, Input, Divider } from 'antd';
import ToogleBtn from './ToogleBtn';

export default class NumericInput extends Component {
    state = {
        expand: false,
    }

    onFinish = (values) => {
        console.log('Success:', values);
    };

    render() {
        const { expand } = this.state
        return (
            <div>
                <Form
                    name="basic"
                    labelCol={{
                        span: 2,
                    }}
                    wrapperCol={{
                        span: 3,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                    autoComplete="off"
                >
                    <div>
                        <Form.Item
                            label="姓名："
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </div>
                    <div style={{ display: expand ? 'block' : 'none' }}>
                        <Form.Item
                            label="年龄："
                            name="age"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your age!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="性别："
                            name="sex"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your sex!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </div>
                    <div>
                        <Divider plain>
                            <ToogleBtn onToogle={()=>this.setState({expand:!expand})} expand={expand} >搜索条件</ToogleBtn>
                        </Divider>
                    </div>
                </Form>
            </div>
        );
    }
}




