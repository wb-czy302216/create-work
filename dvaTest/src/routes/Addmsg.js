import { Form, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
class DynamicRule extends React.Component {
  state = {
    checkNick: false,
  };
  check = () => {
    this.props.form.validateFields(
      (err) => {
        if (!err) {
          console.info('success');
        }
      },
    );
  }
  handleChange = (e) => {
    this.setState({
      checkNick: e.target.checked,
    }, () => {
      this.props.form.validateFields(['nickname'], { force: true });
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <FormItem {...formItemLayout} label="Name">
          {getFieldDecorator('username', {
            rules: [{
              required: true,
              message: 'Please input your name',
            }],
          })(
            <Input placeholder="Please input your name" />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Nickname">
          {getFieldDecorator('nickname', {
            rules: [{
              required: this.state.checkNick,
              message: 'Please input your nickname',
            }],
          })(
            <Input placeholder="Please input your nickname" />
          )}
        </FormItem>
      </div>
    );
  }
}

export default Form.create()(DynamicRule);
