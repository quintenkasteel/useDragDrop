import React, { useEffect, useState, useMemo, createContext, useContext, useReducer } from 'react';
import uuid from '../utils/uuid.js';
import { DnDContext } from './DnDContext';


const Draggable = ({children, id, onDragStart=() => {}}) => {
  const [state, setState] = useContext(DnDContext)
  const dragStart = (event) => {
    event.stopPropagation();
    event.persist();

    // We'll access the "data-position" attribute
    // of the current element dragged
    const initialPosition = parseInt(event.currentTarget.dataset.position);

    setState((state) => ({
      ...state,
      position: {x :event.pageX , y: event.pageY},
      draggingId: initialPosition, // set the draggedFrom position
      isDragging: true,
      editing: null,
    }));

    // Note: this is only for Firefox.
    // Without it, the DnD won't work.
    // But we are not using it.
    event.dataTransfer.setData("text/html", '');
    return onDragStart(event)
   }

   const onEdit = (event) => {
    event.stopPropagation();
    event.persist();
    const clickTreshold = 10;
    if (state.position &&
      event.pageX - state.position.x < clickTreshold
      && event.pageY - state.position.y < clickTreshold
      || true) {
      setState((state) => ({
        ...state,
        editingId: id
      }))
    }
   }

  return (
      <div className="draggable" draggable="true" data-position={`${id}`} onDragStart={(e) => dragStart(e)} onMouseUp={(e) => onEdit(e)}>
        {children}
      </div>
  )};

  export default Draggable