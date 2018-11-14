import { Form, Icon, InputNumber, Radio, Input, Button } from "antd";
import React, { Component } from "react";

import { sum, minus, times, devide, pow } from "../Function/calculate";
import ButtonGroup from "antd/lib/button/button-group";
import { saveFile } from "../Api/saveFile";
import { loadFile } from "../Api/loadFile";

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

  handleChangeInput = async e => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value
      },
      () => {
        const { a, b, operator } = this.state;
        this.operation(a, b, operator);
      }
    );
  };

  operation = (a, b, operator) => {
    switch (operator) {
      case "+":
        this.setState({ result: sum(parseInt(a), parseInt(b)) });
        break;
      case "-":
        this.setState({ result: minus(parseInt(a), parseInt(b)) });
        break;
      case "*":
        this.setState({ result: times(parseInt(a), parseInt(b)) });
        break;
      case "/":
        this.setState({ result: devide(parseInt(a), parseInt(b)) });
        break;
      case "pow":
        this.setState({ result: pow(parseInt(a), parseInt(b)) });
        break;
      default:
        return;
    }
  };

  loadState = async () => {
    const jsonState = await loadFile();
    console.log(jsonState);
    this.setState(jsonState);
  };

  saveState = () => {
    const serializeObject = JSON.stringify(this.state);
    saveFile(serializeObject);
  };

  render() {
    const formItemLayout = {
      labelCol: {
        span: 3,
        offset: 0
      },
      wrapperCol: {
        span: 3,
        offset: 0
      }
    };
    return (
      <div>
        <FormItem label="A" {...formItemLayout}>
          <Input type="number" name="a" onChange={this.handleChangeInput} value={this.state.a} />
        </FormItem>
        <FormItem label="B" {...formItemLayout}>
          <Input type="number" name="b" onChange={this.handleChangeInput} value={this.state.b} />
        </FormItem>
        <FormItem wrapperCol={{ span: 10, offset: 3 }}>
          <Radio.Group
            name="operator"
            value={this.state.operator}
            onChange={this.handleChangeInput}
          >
            <Radio.Button value="+">+</Radio.Button>
            <Radio.Button value="-">-</Radio.Button>
            <Radio.Button value="*">x</Radio.Button>
            <Radio.Button value="/">/</Radio.Button>
            <Radio.Button value="pow">Pow</Radio.Button>
          </Radio.Group>
        </FormItem>
        <FormItem label="Result" {...formItemLayout}>
          <Input disabled value={this.state.result} />
        </FormItem>
        <FormItem wrapperCol={{ span: 10, offset: 3 }}>
          <ButtonGroup>
            <Button type="primary" onClick={this.loadState}>
              Load
            </Button>
            <Button type="primary" onClick={this.saveState}>
              Save
            </Button>
          </ButtonGroup>
        </FormItem>
      </div>
    );
  }
}

export default Calculate;
