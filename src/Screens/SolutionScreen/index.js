import React from "react";
import Presenter from "./Presenter";

export default ({ match: { params: { solutionId } } }) => {

  return (
    <Presenter solutionId={solutionId} />
  );
};
