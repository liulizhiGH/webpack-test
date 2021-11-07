import React, { Component } from "react";
import "./style.less";
import testImg from "../../assets/testImg.png";
// import("../HOC").then((data) => {
//   console.log(data,"hhhh");
// });

class Home extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    console.log(this.props, "this.props");
    return (
      <ul className="homestyle">
        <img src={testImg} />
        <li>这是home组件的内容</li>
        <li>这是home组件的内容</li>
        <li>这是home组件的内容</li>
        <li>这是home组件的内容</li>
        <li>这是home组件的内容</li>
        <li>哈哈哈hahah</li>
        <button
          onClick={() => {
            import("../HOC").then((data) => {
              console.log(data);
            });
          }}
        >
          异步加载hoc组件代码
        </button>
      </ul>
    );
  }
}

export default Home;
