import React, {useMemo, useContext } from 'react';
import uuid from '../uuidv4/uuid.js';
import { DnDContext } from './DnDContext';

const Droppable = ({children, onDragOver = () => {}, onDrop = () => {}}) => {
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
  const memoizedValue = useMemo(() => uuid(), [state.originalOrder]);

   return (
  <div id="sjgs" onDragOver={(e) => dragOver(e)} data-position={`${memoizedValue}`} onDrop={(e) => drop(e)}>
    {children}
  </div>);
};

export default Droppable
