import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "./tabel.scss";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
} from "@tanstack/react-table";

import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const reorderColumn = (draggedColumnId, targetColumnId, columnOrder) => {
  columnOrder.splice(
    columnOrder.indexOf(targetColumnId),
    0,
    columnOrder.splice(columnOrder.indexOf(draggedColumnId), 1)[0]
  );
  return [...columnOrder];
};

const DraggableColumnHeader = ({ header, table }) => {
  const { getState, setColumnOrder } = table;
  const { columnOrder } = getState();
  const { column } = header;

  const [, dropRef] = useDrop({
    accept: "column",
    drop: (draggedColumn) => {
      const newColumnOrder = reorderColumn(
        draggedColumn.id,
        column.id,
        columnOrder
      );
      setColumnOrder(newColumnOrder);
    },
  });

  const [{ isDragging }, dragRef, previewRef] = useDrag({
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    item: () => column,
    type: "column",
  });

  return (
    <th
      ref={dropRef}
      colSpan={header.colSpan}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <div
        ref={previewRef}
        {...{
          className: header.column.getCanSort()
            ? "cursor-pointer table-heading-block select-none"
            : "",
          onClick: header.column.getToggleSortingHandler(),
        }}
      >
        <div className="table-heading-inner-block">
          <span>
            {header.isPlaceholder
              ? null
              : flexRender(header.column.columnDef.header, header.getContext())}
          </span>
          {{
            asc: <FontAwesomeIcon icon={faCaretUp} />,
            desc: <FontAwesomeIcon icon={faCaretDown} />,
          }[header.column.getIsSorted()] ?? null}
        </div>
        <button ref={dragRef}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </th>
  );
};

const TanTable = ({ tableData, tableColumn }) => {
  const testData = [
    {
      firstName: "Alford",
      lastName: "Bashirian",
      age: 35,
      visits: 851,
      progress: 27,
      status: "relationship",
    },
    {
      firstName: "Cordell",
      lastName: "Thiel",
      age: 13,
      visits: 325,
      progress: 20,
      status: "single",
    },
    {
      firstName: "Jeramie",
      lastName: "Mitchell",
      age: 0,
      visits: 747,
      progress: 62,
      status: "relationship",
    },
    {
      firstName: "Marie",
      lastName: "Schroeder",
      age: 24,
      visits: 472,
      progress: 16,
      status: "relationship",
    },
    {
      firstName: "Stella",
      lastName: "Koelpin",
      age: 22,
      visits: 213,
      progress: 64,
      status: "relationship",
    },
    {
      firstName: "Dorris",
      lastName: "D'Amore",
      age: 33,
      visits: 977,
      progress: 85,
      status: "complicated",
    },
    {
      firstName: "Nettie",
      lastName: "Hackett",
      age: 14,
      visits: 187,
      progress: 37,
      status: "single",
    },
    {
      firstName: "Ivory",
      lastName: "Lindgren",
      age: 37,
      visits: 544,
      progress: 86,
      status: "complicated",
    },
    {
      firstName: "Ramon",
      lastName: "Schumm",
      age: 15,
      visits: 159,
      progress: 36,
      status: "relationship",
    },
    {
      firstName: "Aniyah",
      lastName: "Jenkins",
      age: 3,
      visits: 797,
      progress: 33,
      status: "relationship",
    },
    {
      firstName: "Braden",
      lastName: "Russel",
      age: 11,
      visits: 783,
      progress: 18,
      status: "complicated",
    },
    {
      firstName: "Esteban",
      lastName: "Price",
      age: 2,
      visits: 636,
      progress: 25,
      status: "single",
    },
    {
      firstName: "Magdalena",
      lastName: "Rau",
      age: 38,
      visits: 338,
      progress: 75,
      status: "single",
    },
    {
      firstName: "Abigayle",
      lastName: "Pouros",
      age: 1,
      visits: 35,
      progress: 53,
      status: "complicated",
    },
    {
      firstName: "Effie",
      lastName: "Hickle",
      age: 13,
      visits: 161,
      progress: 24,
      status: "single",
    },
    {
      firstName: "Emilia",
      lastName: "Mante",
      age: 7,
      visits: 554,
      progress: 68,
      status: "complicated",
    },
    {
      firstName: "Mustafa",
      lastName: "Kerluke",
      age: 38,
      visits: 631,
      progress: 39,
      status: "single",
    },
    {
      firstName: "Brianne",
      lastName: "Ruecker",
      age: 21,
      visits: 603,
      progress: 2,
      status: "relationship",
    },
    {
      firstName: "Brian",
      lastName: "Sawayn",
      age: 12,
      visits: 34,
      progress: 88,
      status: "relationship",
    },
    {
      firstName: "Raul",
      lastName: "Morissette",
      age: 27,
      visits: 647,
      progress: 99,
      status: "complicated",
    },
  ];

  console.log(tableData);

  const [data, setData] = useState(tableData);
  const [columns] = useState(() => [...tableColumn]);
  const [sorting, setSorting] = useState([]);

  useEffect(() => {
    setData(tableData);
  }, [tableData]);

  const [columnOrder, setColumnOrder] = useState(
    //must start out with populated columnOrder so we can splice
    columns.map((column) => column.id)
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      columnOrder,
      sorting,
    },
    onColumnOrderChange: setColumnOrder,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-2">
        <div className="h-4" />
        <div className="inline-block border border-black shadow rounded">
          <div className="px-1 border-b border-black">
            <label>
              <input
                {...{
                  type: "checkbox",
                  checked: table.getIsAllColumnsVisible(),
                  onChange: table.getToggleAllColumnsVisibilityHandler(),
                }}
              />{" "}
              Toggle All
            </label>
          </div>
          {table.getAllLeafColumns().map((column) => {
            return (
              <div key={column.id} className="px-1">
                <label>
                  <input
                    {...{
                      type: "checkbox",
                      checked: column.getIsVisible(),
                      onChange: column.getToggleVisibilityHandler(),
                    }}
                  />{" "}
                  {column.id}
                </label>
              </div>
            );
          })}
        </div>
        <div className="h-4" />
        <Table className="contact-table">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <DraggableColumnHeader
                    key={header.id}
                    header={header}
                    table={table}
                  />
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </DndProvider>
  );
};

export default TanTable;