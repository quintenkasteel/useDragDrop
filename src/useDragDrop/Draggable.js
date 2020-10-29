import React, { useEffect, useState, useMemo, createContext, useContext, useReducer } from 'react';
import uuid from '../uuidv4/uuid.js';
import { DnDContext } from './DnDContext';

const Draggable = ({children, onDragStart=() => {}}) => {
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
   const memoizedValue = useMemo(() => uuid(), [state.originalOrder]);

  return (
      <div draggable="true" data-position={`${memoizedValue}`} onDragStart={(e) => dragStart(e)}>
        {children}
      </div>
  )};

  export default Draggable