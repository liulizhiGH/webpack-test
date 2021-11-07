/*
 * @Author: liulizhi
 * @Date: 2021-10-09 22:23:17
 * @LastEditTime: 2021-11-07 21:51:15
 * @Description: 此文件为整个项目的入口文件，webpack构建亦是从文件此开始
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/rootRouter";
import "./index.less";

ReactDOM.render(<App />, document.getElementById("root"));
