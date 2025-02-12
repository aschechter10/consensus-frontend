import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useDragContext } from "@/context/DragContext";
import DraggableRect from "./DraggableTile";

const SortableContainer: React.FC = () => {
  const { items, setItems } = useDragContext();

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = items.indexOf(active.id);
      const newIndex = items.indexOf(over.id);
      const newItems: string[] = arrayMove(items, oldIndex, newIndex);
      setItems(newItems);
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <div className="flex flex-col gap-2 p-4 w-80 mx-auto">
          {items.map((id) => (
            <DraggableRect key={id} id={id} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default SortableContainer;