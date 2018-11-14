import React, { Component } from "react";
import { Layout } from "antd";

import "antd/dist/antd.css";
import Calculate from "./Components/Calculate";

const { Content } = Layout;
class App extends Component {
  render() {
    return (
      <Layout>
        <Content>
          <Calculate />
        </Content>
      </Layout>
    );
  }
}

export default App;
