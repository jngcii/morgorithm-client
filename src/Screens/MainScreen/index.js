import React from "react";
import SectionUser from "../../Components/SectionUser";
import SolvingStatusBar from "../../Components/SolvingStatusBar";
import SectionSolvingList from "../../Components/SectionSolvingList";
import SectionProblem from "../../Components/SectionProblem";
import SectionQuestion from "../../Components/SectionQuestion";

export default () => (
  <div style={{backgroundColor:"#f2f2f2"}}>
    <SectionUser />
    <SolvingStatusBar />
    <SectionSolvingList />
    <SectionProblem />
    <SectionQuestion />
  </div>
);