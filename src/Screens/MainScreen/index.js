import React from "react";
import { useSelector } from "react-redux";
import Presenter from "./Presenter";

export default () => {
  const {
    user: { profile }
  } = useSelector(state => state);

  return <Presenter />;
};
