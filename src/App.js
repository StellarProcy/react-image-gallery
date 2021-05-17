import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import ImageMainPage from "./components/ImageMainPage"

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ImageMainPage} />
      </Switch>
    );
  }
}
