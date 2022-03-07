import React from "react";
import PlanTableBody from "./PlanTableBody";
import PlanTableHeader from "./PlanTableHeader";
import PlanFilterBar from "./PlanFilterBar";
import Table from "../../ui/tables/Table";
import RoundedCanvas from "../../ui/canvases/RoundedCanvas";

const Plan = () => {
  return (
    <RoundedCanvas>
      <PlanFilterBar />
      <Table>
        <PlanTableHeader />
        <PlanTableBody/>
      </Table>
    </RoundedCanvas>
  );
};

export default Plan;
