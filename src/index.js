// import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "./Jreact/react-dom";

import Component from "./Jreact/Component";

import "./index.css";

class ClassComponent extends Component {
  render() {
    return (
      <div className="border">
        <p>函数组件-{this.props.name}</p>
      </div>
    );
  }
}

export default ClassComponent;

function FunctionComponent(props) {
  return (
    <div className="border">
      <p>函数组件-{props.name}</p>
    </div>
  );
}

const app = (
  <div className="border">
    <h1>hello hello</h1>
    <a href="https://www.jd.com/">买买</a>
    {/* <FunctionComponent name="function" />
    <ClassComponent name="class" /> */}
  </div>
);

ReactDOM.render(app, document.getElementById("root"));

// console.log("version", React.version);

// 原生标签节点
// 文本节点
// 函数组件
// 类组件
