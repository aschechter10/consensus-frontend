import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface DraggableRectProps {
  id: string;
}

const DraggableRect: React.FC<DraggableRectProps> = ({ id }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="w-full h-24 bg-blue-500 text-white flex items-center justify-center rounded-md shadow-md cursor-grab active:cursor-grabbing"
    >
      {id}
    </div>
  );
};

export default DraggableRect;