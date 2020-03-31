import React from "react";
import { useLocation } from "react-router-dom";
import Presenter from "./Presenter";

export default () => {
  const { state: { solutionId } } = useLocation();

  return (
    <Presenter solutionId={solutionId} />
  );
};
