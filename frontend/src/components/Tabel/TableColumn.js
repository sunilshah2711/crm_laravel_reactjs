import React from "react";
import "./tabel.scss";


const TableColumn = ({ table }) => {
  return (
    <>
      <div className="ProjectFilter">
        <div className="projectfiltercheckbox">
            <input
              {...{
                type: "checkbox",
                checked: table.getIsAllColumnsVisible(),
                onChange: table.getToggleAllColumnsVisibilityHandler(),
              }}
            />{" "}
            <p>Toggle All</p>
        </div>
        {table.getAllLeafColumns().map((column) => {
          return (
            <div key={column.id} className="projectfiltercheckbox">
                <input
                  {...{
                    type: "checkbox",
                    checked: column.getIsVisible(),
                    onChange: column.getToggleVisibilityHandler(),
                  }}
                />{" "}
                <p>{column.columnDef.header}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TableColumn;
