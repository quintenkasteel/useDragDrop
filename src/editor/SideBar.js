import React, { useContext } from "react";
import { DnDContext } from "./dragAndDrop/DnDContext";
import {
  getComponent,
  updateComponents,
  getValue,
} from "./utils/components/utils";
import Definitions, { tabs } from "./Components/Definitions";

const renderField = (field) => {
  switch(field.inputType) {
    case "text":
      <Input field={field.name} type={"text"} />;
      break;
    case "range":
      <Input field={field.name} type={"range"} />
    default: return null
  }
}


const Input = ({ field, type }) => {
  const [state, setState] = useContext(DnDContext);
  const component = getComponent(state.components, state.editingId);
  const changeValue = (e) => {
    e.persist();
    setState((state) => ({
      ...state,
      components: updateComponents(
        state,
        state.editingId,
        field,
        e.target.value
      ),
    }));
  };

  return (
    <>
      <input
        type={type}
        value={
          (component.props &&
            component.props[field] &&
            component.props[field]) ||
          ""
        }
        onChange={(e) => changeValue(e)}
      />
    </>
  );
};

const SideBar = () => {
  const [state, setState] = useContext(DnDContext);

  const component =
    state.editingId && getComponent(state.components, state.editingId);
  console.log("component", component)
  const definitions = state.editingId && Definitions(component.type);
  if (!state.editingId) return null;

  return <Input field={"padding"} type={"range"} />;
};

export default SideBar;
