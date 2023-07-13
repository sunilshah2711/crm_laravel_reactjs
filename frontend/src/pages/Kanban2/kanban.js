import React, { useState, useCallback, useRef } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import update from "immutability-helper";

const tasksList = [
  { _id: 1, title: "First Task", status: "backlog" },
  { _id: 2, title: "Second Task", status: "backlog" },
  { _id: 3, title: "Third Task", status: "backlog" },
  { _id: 4, title: "Fourth Task", status: "new" },
  { _id: 5, title: "Fifth Task", status: "new" },
  { _id: 6, title: "Sixth Task", status: "wip" },
  { _id: 7, title: "Seventh Task", status: "review" },
  { _id: 8, title: "Eighth Task", status: "review" },
  { _id: 9, title: "Ninth Task", status: "done" },
  { _id: 10, title: "Tenth Task", status: "done" }
];

const channels = ["backlog", "new", "wip", "review", "done"];
const labelsMap = {
  backlog: "Backlog",
  new: "To Do",
  wip: "In Progress",
  review: "Review",
  done: "Done"
};

const classes = {
  board: {
    display: "flex",
    margin: "0 auto",
    width: "90vw",
    fontFamily: 'Arial, "Helvetica Neue", sans-serif'
  },
  column: {
    minWidth: 200,
    width: "18vw",
    height: "80vh",
    margin: "0 auto",
    backgroundColor: "#FCC8B2"
  },
  columnHead: {
    textAlign: "center",
    padding: 10,
    fontSize: "1.2em",
    backgroundColor: "#C6D8AF"
  },
  item: {
    padding: 10,
    margin: 10,
    fontSize: "0.8em",
    cursor: "pointer",
    backgroundColor: "white"
  }
};

const Kanban = () => {
  const [tasks, setTaskStatus] = useState(tasksList);

  const changeTaskStatus = useCallback(
    (id, status) => {
      let task = tasks.find(task => task._id === id);
      const taskIndex = tasks.indexOf(task);
      task = { ...task, status };
      let newTasks = update(tasks, {
        [taskIndex]: { $set: task }
      });
      setTaskStatus(newTasks);
    },
    [tasks]
  );

  return (
    <main>
      <header> Kanban Board </header>
      <DndProvider backend={HTML5Backend}>
        <section style={classes.board}>
          {channels.map(channel => (
            <KanbanColumn
              key={channel}
              status={channel}
              changeTaskStatus={changeTaskStatus}
            >
              <div style={classes.column}>
                <div style={classes.columnHead}>{labelsMap[channel]}</div>
                <div>
                  {tasks
                    .filter(item => item.status === channel)
                    .map(item => (
                      <KanbanItem key={item._id} id={item._id}>
                        <div style={classes.item}>{item.title}</div>
                      </KanbanItem>
                    ))}
                </div>
              </div>
            </KanbanColumn>
          ))}
        </section>
      </DndProvider>
    </main>
  );
};

export default Kanban;

const KanbanColumn = ({ status, changeTaskStatus, children }) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: "card",
    drop(item) {
      changeTaskStatus(item.id, status);
    }
  });
  drop(ref);
  return <div ref={ref}> {children}</div>;
};

const KanbanItem = ({ id, children }) => {
  const ref = useRef(null);
  const ItemTypes = {
    CARD: 'card',
  };
  
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0 : 1;
  drag(ref);
  return (
    <div ref={ref} style={{ opacity }}>
      {children}
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
