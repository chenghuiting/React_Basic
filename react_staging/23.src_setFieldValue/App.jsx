import React, { Component } from 'react'
// import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Form, Select } from 'antd';
import Strategy from './Strategy';

const { Option } = Select;

export default class NumericInput extends Component {
    formRef = React.createRef()
    strategyRef = React.createRef()

    state = {}

    handle = (values) => {
        console.log(values);
    }

    handleChange = (value) => {
        console.log(`selected ${value}`);
    }
    handlebbbChange = (value) => {
        this.formRef.current.setFieldsValue({ aaa: [] })
    }
    render() {
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 4 }
        }

        return (
            <div>
                <Form onFinish={this.handle} ref={this.formRef}>
                    <Form.Item name='bbb' label='bbb' {...formItemLayout}>
                        <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handlebbbChange}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </Form.Item>
                    <Strategy ref={this.strategyRef} handlebbbChange={this.handlebbbChange} />
                </Form>
            </div>
        );
    }
}




