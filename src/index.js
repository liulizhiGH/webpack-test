// 此文件为整个项目的入口文件，webpack构建亦是从文件此开始
import React from "react";
import ReactDOM from "react-dom";
import RootRouter from "./routes/rootRouter";
import "./index.less";

ReactDOM.render(<RootRouter />, document.getElementById("root"));
