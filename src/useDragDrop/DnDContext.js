import React, { useState, createContext } from 'react';

export const initialDnDState = {
  draggingId: null,
  draggedTo: null,
  isDragging: false,
  originalOrder: [],
  updatedOrder: [],
};
export const DnDContext = createContext();

export const DndProvider = ({ children }) => {
  const [state, setState] = useState(initialDnDState);
  return (
    <>
      <DnDContext.Provider value={[state, setState]}>
        {children}
      </DnDContext.Provider>
    </>
  );
};
