import React, { useEffect, useState, useMemo, createContext, useContext, useReducer } from 'react';
import uuid from '../uuidv4/uuid.js';

const initialDnDState = {
  draggingId: null,
  draggedTo: null,
  isDragging: false,
  originalOrder: [],
  updatedOrder: []
}

const DnDContext = createContext();

function reducer(state, item) {
  return [...state, item]
}

export const useDrag = () => {
  const [state, setState] = useContext(DnDContext)
  return null;
};

export const useDrop = () => {
  const [state, setState] = useContext(DnDContext)

  return null;
};

export const DndProvider = ({children}) => {
  const [state, setState] = useState(initialDnDState);
return (
  <>
  <DnDContext.Provider value={[state, setState]}> {children} </DnDContext.Provider>
  </>
  )
}

export const Draggable = ({children, onDragStart=() => {}}) => {
  const [state, setState] = useContext(DnDContext)
  console.log("state", state)
  const dragStart = (event) => {
    console.log(event.currentTarget.dataset.position)
    // We'll access the "data-position" attribute
    // of the current element dragged
    const initialPosition = event.currentTarget.dataset.position;
  
    setState((state) => ({
      ...state, 
      draggingId: initialPosition, // set the draggedFrom position
      isDragging: true, 
    }));
  
    // Note: this is only for Firefox.
    // Without it, the DnD won't work.
    // But we are not using it.
    event.dataTransfer.setData("text/html", '');
    return onDragStart(event)
   }
   const memoizedValue = useMemo(() => uuid(), [initialDnDState.originalOrder]);

  return (
      <div draggable="true" data-position={`${memoizedValue}`} onDragStart={(e) => dragStart(e)}>
        {children}
      </div>
  )};

export const Droppable = ({children, onDragOver = () => {}, onDrop = () => {}}) => {
  const [state, setState] = useContext(DnDContext)
  const dragOver = (event) => {
    event.preventDefault();
    return onDragOver(event)
  }
  const drop = (event) => {
    setState((state) => ({
      ...state,
      isDragging: false,
      draggingId: null
    }))
    return onDrop(event)
  }
  const memoizedValue = useMemo(() => uuid(), [initialDnDState.originalOrder]);

   return (
  <div id="sjgs" onDragOver={(e) => dragOver(e)} data-position={`${memoizedValue}`} onDrop={(e) => drop(e)}>
    {children}
  </div>);
};
