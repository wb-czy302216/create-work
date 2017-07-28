import React from 'react';
import { connect } from 'dva';
import { Modal, Form, Input, InputNumber, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button  } from "antd";
const FormItem = Form.Item;
const Option = Select.Option;
const provinceData = ['Zhejiang', 'Jiangsu'];
const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];
class EditableCell extends React.Component {
  state = {
    confirmDirty: false,
  };


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.handleOk()
      }
    });
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }


  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };


    return (
      <div>
        <Modal
          title="请输入要添加的内容"
          visible={this.props.visible}
          onOk={this.handleSubmit}
          onCancel={this.props.handleCancel}
        >
          <FormItem
            {...formItemLayout}
            label="Name"
            hasFeedback
          >
            {getFieldDecorator('name', {
              rules: [{
                required: true, message: 'Please input your Name!',
              }],
            })(
              <Input type="text" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="age"
          >
            {getFieldDecorator('input-number', { initialValue: 24, rules: [{
                required: true, message: 'Please input your age!',
              }, {
                validator: this.checkConfirm,
              }],
            })(
              <InputNumber min={1} max={100} />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="address"
          >
            {getFieldDecorator('residence', {
              initialValue: ['zhejiang', 'hangzhou', 'xihu'],
              rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
            })(
              <Cascader options={residences} />
            )}
          </FormItem>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {...state}
}

export default Form.create(mapStateToProps)(EditableCell);

