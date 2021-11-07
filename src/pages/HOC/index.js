/*
 * @Author: liulizhi
 * @Date: 2021-10-09 22:30:46
 * @LastEditTime: 2021-11-07 21:29:16
 * @Description: 高阶组件(导出)
 */
import React, { Component } from "react";

export default function WithMouse(Components) {
  class Mouse extends Component {
    state = {
      x: null,
      y: null,
      kkk: "hello change",
    };
    mousemove = (e) => {
      this.setState({
        x: e.clientX,
        y: e.clientY,
      });
    };

    componentDidMount() {
      window.addEventListener("mousemove", this.mousemove);
    }

    componentWillUnmount() {
      window.removeEventListener("mousemove", this.mousemove);
    }

    render() {
      return <Components {...this.props} {...this.state} />;
    }
  }

  return Mouse;
}
