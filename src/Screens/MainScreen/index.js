import React from "react";
import SectionUser from "../../Components/SectionUser";
import SolvingStatusBar from "../../Components/SolvingStatusBar";
import SectionSolvingList from "../../Components/SectionSolvingList";

export default () => (
  <div style={{backgroundColor:"#f2f2f2"}}>
    <SectionUser />
    <SolvingStatusBar />
    <SectionSolvingList />

    <div style={{height: 500}} />
  </div>
);