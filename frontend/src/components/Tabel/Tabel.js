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
  getFilteredRowModel,
  getExpandedRowModel,
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

const TanTable = ({ tableData, tableColumn, tableCol, reftechCol }) => {
  const [data, setData] = useState(tableData);
  const [columns, setColumns] = useState(tableColumn);
  const [sorting, setSorting] = useState([]);

  useEffect(() => {
    setData(tableData);
  }, [tableData]);

  const [columnOrder, setColumnOrder] = useState([]);

  useEffect(() => {
    setColumnOrder(columns.map((column) => column.id));
  }, [columns]);

  useEffect(() => {
    setColumns(tableColumn);
  }, [tableColumn]);

  const [expanded, setExpanded] = useState({});

  // console.log(tableColumn);

  const table = useReactTable({
    data,
    columns,
    state: {
      columnOrder,
      sorting,
      expanded,
    },
    onColumnOrderChange: setColumnOrder,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getSubRows: (row) => row.subRows,
    getFilteredRowModel: getFilteredRowModel(),
    getExpandedRowModonExpandedChange: setExpanded,
    onExpandedChange: setExpanded,
    getExpandedRowModel: getExpandedRowModel(),
  });

  useEffect(() => {
    tableCol(table);
  }, [table, tableCol, reftechCol]);

  // console.log("inside tabel js data from contact 139", tableColumn);
  // console.log("inside tabel.js 143", table.getHeaderGroups());

  return (
    <>
      <DndProvider backend={HTML5Backend}>
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
      </DndProvider>
    </>
  );
};

export default TanTable;
