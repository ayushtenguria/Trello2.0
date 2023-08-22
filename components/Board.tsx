"use client";

import { useBoardStore } from "@/store/BoardStore";
import { useDebugValue, useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export const Board = () => {
  const [board, getBoard] = useBoardStore((state) => [
    state.board,
    state.getBoard,
  ]);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  return (
    <DragDropContext>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => <div> {
            
            Array.from(board.column.entries()).map(([id, column], index) => (
                
            ))

            } </div>}
      </Droppable>
    </DragDropContext>
  );
};
