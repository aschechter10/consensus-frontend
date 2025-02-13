import { useGameContext, Item } from '@/context/GameContext';

const ListTile = ({ item }: { item: Item }) => {
  const { items, toggleSorted } = useGameContext();

  const ranking = items.indexOf(item);
  const colors = ["#118AB2", "#06D6A0", "#FFD166", "#EF476F"]
  const color = colors[ranking];

  const handleOnClick = () => {
    toggleSorted(item.id);
  }

  const placedTile = (
    <button
      onClick={handleOnClick}
      style={{ backgroundColor: color }}
      className='rounded-md h-16 text-black font-bold'
    >
      {item.displayName}
    </button>
  );

  const emptyTile = (
    <div style={{ borderColor: color }} className={`border-2 rounded-md h-16`}></div>
  );

  if (item.sorted) {
    return (placedTile);
  } else {
    return (emptyTile);
  }
};

const WordBankTile = ({ item }: { item: Item }) => {
  const { toggleSorted } = useGameContext();

  const handleOnClick = () => {
    toggleSorted(item.id);
  }

  const placedTile = (
    <button
      onClick={handleOnClick}
      className='rounded-md bg-gray-300 text-black font-bold h-12'
    >
      {item.displayName}
    </button>
  );

  const emptyTile = (
    <div className='border border-dashed rounded-md h-12'></div>
  );

  if (!item.sorted) {
    return (placedTile);
  } else {
    return (emptyTile);
  }
}

export { ListTile, WordBankTile };