import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "./redux/configureStore";
import AppContainer from "./Components/AppContainer";

const { store, persistor } = configureStore();

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <AppContainer />
      </Router>
    </PersistGate>
  </Provider>
);
