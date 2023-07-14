import { useDroppable } from "@dnd-kit/core";

const KanbanColumn = ({ id, children }) => {
  const { setNodeRef } = useDroppable({
    id: id,
    data: {
      column: id,
    },
  });
  return (
    <div ref={setNodeRef} className="kanban-col">
      <h3>{id}</h3>
      {children}
    </div>
  );
};

export default KanbanColumn;
