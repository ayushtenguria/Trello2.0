'use client'

import { useBoardStore } from '@/store/BoardStore';
import { useDebugValue, useEffect } from 'react';
import { DragDropContext , Droppable} from 'react-beautiful-dnd';

export const Board = () => {
    
    const getBoard = useBoardStore((state) => state.getBoard);

    useEffect(() => {
        getBoard();
    }, [getBoard]);

    return(
        <h1>Hello</h1>
        // <DragDropContext>
        //     <Droppable droppableId='board' direction='horizontal' type='column'>
        //         {(provided) => (
        //             <div>
                        
        //             </div>
        //         )}
        //     </Droppable>

        // </DragDropContext>
    )
}