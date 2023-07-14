import { useState } from "react";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import KanbanColumn from "./KanbanColumn";
import KanbanItem from "./KanbanItem";
import "./style.scss";

const SortableKanbanItem = ({ id, index, parent, children }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: `item-${id}`,
    });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: transform
          ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
          : undefined,
        transition,
      }}
      {...listeners}
      {...attributes}
    >
      <KanbanItem id={id} index={index} parent={parent}>
        {children}
      </KanbanItem>
    </div>
  );
};

const Kanban = () => {
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
    if (event.over !== null) {
      const oldItem = event.active.data.current;
      const newItem = event.over.data.current;

      let title = "";
      let duplicateIndex = -1;

      data.forEach((item, index) => {
        if (item.id === oldItem.index) {
          title = item.data.title;
        }
        if (item.id === oldItem.index && duplicateIndex === -1) {
          duplicateIndex = index;
        }
      });

      if (duplicateIndex !== -1) {
        const updatedData = [...data];
        updatedData.splice(duplicateIndex, 1);
        setData([
          ...updatedData,
          {
            id: oldItem.index,
            data: {
              parent: newItem.column,
              title: title,
            },
          },
        ]);
      } else {
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
      }
    } else {
      setData(data);
    }
  };

  const [text, setText] = useState("");

  const handleInputChnage = (e) => {
    setText(e.target.value);
  };

  const onConfirm = () => {
    if (text !== "") {
      setText("");
      setData([
        ...data,
        {
          id: data.length + 1,
          data: {
            parent: "Todo",
            title: text,
          },
        },
      ]);
    } else {
      alert("Please give valid task name");
    }
  };

  return (
    <div>
      <input value={text} type="text" onChange={handleInputChnage} />
      <button onClick={onConfirm}>add task</button>
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
    </div>
  );
};

export default Kanban;
