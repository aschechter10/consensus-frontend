'use client'

import { useEffect } from 'react';

import { useGameContext } from '@/context/GameContext';
import SortList from '@/components/SortList';
import WordBank from '@/components/WordBank';

export default function Home() {
  const { items } = useGameContext();

  return (
    <div className="flex flex-col gap-12 justify-center items-center min-h-screen">
      <SortList></SortList>
      <WordBank></WordBank>
    </div>
  );
}
