import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/configureStore";
import AppContainer from "./Components/AppContainer";

export default () => (
  <Provider store={store}>
    <Router>
      <AppContainer />
    </Router>
  </Provider>
);
