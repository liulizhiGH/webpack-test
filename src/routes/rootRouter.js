/*
 * @Author: liulizhi
 * @Date: 2021-10-09 22:26:25
 * @LastEditTime: 2021-11-07 21:50:36
 * @Description: 路由总组件
 */
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Concat from "../pages/Concat";

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/concat">
          <Concat />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
