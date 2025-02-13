import { useGameContext } from "@/context/GameContext";
import { WordBankTile } from "./Tiles";

const WordBank = () => {
  const { getItemById } = useGameContext();

  return (
    <div className="grid grid-cols-2 grid-rows-2 w-full gap-2 max-w-lg">
      <WordBankTile item={getItemById(1)} />
      <WordBankTile item={getItemById(2)} />
      <WordBankTile item={getItemById(3)} />
      <WordBankTile item={getItemById(4)} />
    </div>
  );
};

export default WordBank;