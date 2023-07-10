import React, { useState } from "react";
import {
  DndContext,
  useDroppable,
  DragOverlay,
  useDraggable,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import "./Kanban.scss";

const Column = (props) => {
  const { setNodeRef } = useDroppable({
    id: props.id,
  });

  return (
    <div ref={setNodeRef} className="kanban-col">
      {props.children}
    </div>
  );
};

const Item = ({ title, index, parent }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: title,
    data: {
      title,
      index,
      parent,
    },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  console.log(attributes, listeners);
  return (
    <div ref={setNodeRef} {...listeners} {...attributes} style={{ style }}>
      <h3>{title}</h3>
    </div>
  );
};

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
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = () => {
    setIsDragging(true);
  };
  const handleDragEnd = () => {
    setIsDragging(false);
  };
  return (
    <div className="kanban">
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        {columns.map((id) => {
          return (
            <Column id={id} key={id}>
              Droppable Column : {id}
              {item.map((item) => {
                if (item.data.parent === id) {
                  return (
                    <Item id={item.id} key={item.id}>
                      {item.data.title}
                    </Item>
                  );
                }
              })}
            </Column>
          );
        })}
        <DragOverlay>{isDragging ? <Item /> : null}</DragOverlay>
      </DndContext>
    </div>
  );
}

export default App;
