import { react, Component } from "react";

const Child = (props) => {
  const cb = (msg) => {
    return () => {
      props.callback(msg);
    };
  };
  return <button onClick={cb("京程一灯欢迎你!")}>京程一灯欢迎你</button>;
};

// 父组件 Parent
export default class Parent extends Component {
  callback(msg) {
    console.log(msg);
  }
  render() {
    return <Child callback={this.callback.bind(this)}></Child>;
  }
}
