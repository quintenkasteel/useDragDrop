import React, { useContext, useEffect } from "react";
import RowComponent from "../Components/Row";
import ContainerComponent from "../Components/Container";
import Droppable from "../dragAndDrop/Droppable";
import Draggable from "../dragAndDrop/Draggable";
import { DnDContext } from "../dragAndDrop/DnDContext";
import arrayToTree from "./ArrayToTree";
import getDefinition from "../Components/Definitions";

const Components = {
  Row: RowComponent,
  Container: ContainerComponent,
};

const Render = ({ components }) => {
  const [state, setState] = useContext(DnDContext);
  useEffect(() => {
    setState((state) => ({
      ...state,
      components: components,
    }));
  }, []);

  return (
    <>
      <Droppable id={0}>
        {state.components
          ? arrayToTree(state.components).map((component) => {
              return (
                <Component key={component.data.id} component={component} />
              );
            })
          : null}
      </Droppable>
    </>
  );
};

export const Component = ({ component }) => {
  const nestedChildren = (component.children || []).map((childComponent) => {
    return (
      <Component key={childComponent.data.id} component={childComponent} />
    );
  });

  if (typeof Components[component.data.type] === "undefined") return;
  const comp = React.createElement(Components[component.data.type], {
    key: component.data.id,
    block: component,
    children: nestedChildren,
  });
  return (
    (getDefinition(component.data.type).droppable && (
      <Draggable id={component.data.id}>
        <Droppable id={component.data.id}>{comp}</Droppable>
      </Draggable>
    )) || <Draggable id={component.data.id}>{comp}</Draggable>
  );
};

export default Render;
