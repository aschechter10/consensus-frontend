'use client'

import { useEffect } from 'react';

import SortableContainer from '@/components/SortableContainer';
import { useDragContext } from '@/context/DragContext';

export default function Home() {
  const { items } = useDragContext();

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div className="flex items-center justify-center min-h-screen p-32 font-[family-name:var(--font-geist-sans)]">
      <main>
        <SortableContainer />
      </main>
    </div>
  );
}
