'use client'

import { createContext, useContext, useState } from "react";

interface DragContextType {
  items: string[];
  setItems: (items: string[]) => void;
}

const DragContext = createContext<DragContextType | undefined>(undefined);

export const DragProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<string[]>(["Rect 1", "Rect 2", "Rect 3", "Rect 4"]);

  return <DragContext.Provider value={{ items, setItems }}>{children}</DragContext.Provider>;
};

export const useDragContext = () => {
  const context = useContext(DragContext);
  if (!context) throw new Error("useDragContext must be used within a DragProvider");
  return context;
};