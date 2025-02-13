import { useGameContext } from "@/context/GameContext"
import { ListTile } from './Tiles';

const SortList = () => {
  const { items, toggleSorted } = useGameContext();

  return (
    <div className="flex flex-col gap-2 w-full max-w-lg">
      {items.map((item) => (
        <ListTile key={item.id} item={item} />
      ))}
    </div>
  );
};

export default SortList;