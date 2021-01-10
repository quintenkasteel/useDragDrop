import React, { useMemo, useContext, useEffect } from "react";
import uuid from "../utils/uuid.js";
import { DnDContext } from "./DnDContext";
import {updateComponents} from "../utils/components/utils"
const Droppable = ({
  children,
  id,
  onDragOver = () => {},
  onDrop = () => {},
}) => {
  const [state, setState] = useContext(DnDContext);
  const dragOver = (event) => {
    event.preventDefault();

    const dragOverPosition = parseInt(event.currentTarget.dataset.position);
    const child = document.querySelector(`[data-position="${id}"]`);
    const children = Array.from(child.parentNode.children);
    const index = Array.from(child.parentNode.children).indexOf(child);
    console.log("dragOverPosition", dragOverPosition, state.draggingId);

    setState((state) => ({
      ...state,
      dragOver: dragOverPosition !== state.draggingId && { parent: dragOverPosition, index: index } || state.dragOver,
      // components: dragOverPosition !== state.draggingId && updateComponents(state.components, dragOverPosition) || state.components,
    }));
    return onDragOver(state);
  };



  const drop = (event) => {
    event.stopPropagation();
    const dropPosition = parseInt(event.currentTarget.dataset.position);
    setState((state) => ({
      ...state,
      isDragging: false,
      draggedTo: dropPosition !== state.draggingId && dropPosition || state.draggedTo,
      components: updateComponents(state, state.draggingId, "parentId", dropPosition)
    }));
    return onDrop(state);
  };

  return (
    <div
      className="droppable"
      style={{ margin: 10 }}
      onDragOver={(e) => dragOver(e)}
      data-position={`${id}`}
      onDrop={(e) => drop(e)}
    >
      {children}
    </div>
  );
};

export default Droppable;
