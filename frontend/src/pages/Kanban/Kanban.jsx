import { useState } from "react";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import KanbanColumn from "./KanbanColumn";
import KanbanItem from "./KanbanItem";
import "./App.css";

function App() {
  const mouseSensor = useSensor(MouseSensor); // Initialize mouse sensor
  const touchSensor = useSensor(TouchSensor); // Initialize touch sensor
  const sensors = useSensors(mouseSensor, touchSensor);

  const columns = ["Todo", "Doing", "Review", "Done"];

  const item = [
    {
      id: 1,
      data: {
        parent: "Todo",
        title: "Task 1",
      },
    },
    {
      id: 2,
      data: {
        parent: "Todo",
        title: "Task 2",
      },
    },
    {
      id: 3,
      data: {
        parent: "Doing",
        title: "Task 3",
      },
    },
    {
      id: 4,
      data: {
        parent: "Review",
        title: "Task 4",
      },
    },
    {
      id: 5,
      data: {
        parent: "Todo",
        title: "Task 5",
      },
    },
    {
      id: 6,
      data: {
        parent: "Done",
        title: "Task 6",
      },
    },
  ];

  const [data, setData] = useState(item);

  const handleDragEnd = (event) => {
    const oldItem = event.active.data.current;
    const newItem = event.over.data.current;

    let title = "";

    data.map((item) => {
      if (item.id === oldItem.index) {
        title = item.data.title;
      }
    });

    setData([
      ...data,
      {
        id: oldItem.index,
        data: {
          parent: newItem.column,
          title: title,
        },
      },
    ]);

    console.log(event);
  };

  return (
    <div className="kanban">
      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        {columns.map((col) => {
          return (
            <KanbanColumn id={col} key={col}>
              {data.map((item) => {
                if (col === item.data.parent) {
                  return (
                    <KanbanItem
                      id={item.id}
                      index={item.id}
                      parent={item.data.parent}
                      key={item.id}
                    >
                      {item.data.title}
                    </KanbanItem>
                  );
                }
              })}
            </KanbanColumn>
          );
        })}
      </DndContext>
    </div>
  );
}

export default App;
