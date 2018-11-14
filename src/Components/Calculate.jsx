import { Form, Icon, InputNumber, Radio, Input } from "antd";
import React, { Component } from "react";

const FormItem = Form.Item;

class Calculate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: "",
      b: "",
      operator: "",
      result: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form>
          <FormItem label="A">
            {getFieldDecorator("a", {
              rules: [{ required: true, message: "Please input this field!" }]
            })(
              <InputNumber
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
              />
            )}
          </FormItem>
          <FormItem label="B">
            {getFieldDecorator("b", {
              rules: [{ required: true, message: "Please input this field!" }]
            })(
              <InputNumber
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
              />
            )}
          </FormItem>
          <Radio.Group
            name="operator"
            value={this.state.operator}
            onChange={this.handleChange}
          >
            <Radio.Button value="+">+</Radio.Button>
            <Radio.Button value="-">-</Radio.Button>
            <Radio.Button value="*">x</Radio.Button>
            <Radio.Button value="/">/</Radio.Button>
            <Radio.Button value="pow">Pow</Radio.Button>
          </Radio.Group>
          <FormItem label="Result">
            <Input disabled value={this.state.result} />
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Form.create()(Calculate);
