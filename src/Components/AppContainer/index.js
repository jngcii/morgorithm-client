import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Presenter from "./Presenter";

export default () => {
  const {
    user: { isLoggedIn }
  } = useSelector(state => state);

  return <Presenter isLoggedIn={isLoggedIn} />;
};
