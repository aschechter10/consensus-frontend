'use client'

import { createContext, useContext, useState } from "react";

interface GameContextType {
  items: Item[];
  setItems: (items: Item[]) => void;
  toggleSorted: (id: Item['id']) => void;
  getItemById: (id: Item['id']) => Item;
};

interface Item {
  id: 1 | 2 | 3 | 4;
  displayName: string;
  sorted: boolean;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

function separateItems(items: Item[]): { sortedItems: Item[]; unsortedItems: Item[] } {
  const sortedItems: Item[] = [];
  const unsortedItems: Item[] = [];
  for (const item of items) {
    if (item.sorted) {
      sortedItems.push(item);
    } else {
      unsortedItems.push(item);
    }
  }
  return { sortedItems, unsortedItems };
}

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, displayName: "rect 1", sorted: true },
    { id: 2, displayName: "rect 2", sorted: true },
    { id: 3, displayName: "rect 3", sorted: false },
    { id: 4, displayName: "rect 4", sorted: false }
  ]);

  const toggleSorted = (id: Item['id']) => {
    const item = items.find(item => id === item.id);
    if (!item) return;
    const { sortedItems, unsortedItems } = separateItems(items);
    if (!item.sorted) {
      item.sorted = !item.sorted;
      const newSortedItems = [...sortedItems, item];
      const newUnsortedItems = unsortedItems.filter(i => i.id !== id);
      const newItems = [...newSortedItems, ...newUnsortedItems];
      setItems(newItems);
    } else {
      item.sorted = !item.sorted;
      const newSortedItems = sortedItems.filter(i => i.id !== id);
      const newUnsortedItems = [...unsortedItems, item];
      const newItems = [...newSortedItems, ...newUnsortedItems];
      setItems(newItems);
    }
  };

  const getItemById = (id: Item['id']) => {
    const item = items.find(item => id === item.id);
    if (item) return item;
    else throw new Error(`Item with id ${id} not found`);
  }

  return <GameContext.Provider value={{ items, setItems, toggleSorted, getItemById }}>{children}</GameContext.Provider>;
};

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error("useGameContext must be used within a GameProvider");
  return context;
};

export type { Item };
