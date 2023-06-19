import { ClientTable } from "@/components/clientTable";
import React from "react";

const page = () => {
  return (
    <div>
      {" "}
      <ClientTable
        textColor={"table_head_text"}
        tableData_text_center={"td_text_center"}
      />
    </div>
  );
};

export default page;
