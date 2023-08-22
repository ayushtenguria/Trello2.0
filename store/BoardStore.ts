import { getTodosGroupedByColumn } from '@/lib/getTodosGroupedByColumn';
import { create } from 'zustand'


interface BoardState {
 board: Board;
 getBoard: () => void;
}

export const useBoardStore = create<BoardState>((set) => ({
  board: {
    column: new Map<TypedColumn, Colunm>()
  },
  getBoard: async() => {
    const board =  await getTodosGroupedByColumn();
    set({board})
  }
}))