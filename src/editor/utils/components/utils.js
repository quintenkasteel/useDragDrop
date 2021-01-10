export const getChildren = (components, id) => {
  let arr = [];

  const children = components
    .filter((component) => component.parentId == id)
    .map((component) => component.id);
  arr = [...children];
  const subchildren = children.map((id) => {
    return getChildren(components, id);
  });

  arr = [...arr, subchildren].flat(Infinity);

  return arr;
};

export const getComponent = (components, id) =>
  components.filter((comp) => comp.id == id)[0];

export const getValue = (components, id, field) => {
  (getComponent(components, id)[field] &&
    getComponent(components, id)[field]) ||
    (getComponent(components, id).props && getComponent(components, id).props[field] &&
      getComponent(components, id).props[field]) || null;
};

export const updateComponents = (state, id, field, value) => {
  let components = [...state.components];
  const componentIndex =
    getComponent(components, id) &&
    components.findIndex((comp) => comp.id == getComponent(components, id).id);
  console.log("field", field);
  if (field === "parentId") {
    const children = getChildren(components, id);
    const dropInChild =
      children && children.findIndex((id) => id === dragPosition) > -1;

    components[componentIndex] =
      (!dropInChild && {
        ...components[componentIndex],
        parentId: value,
      }) ||
      components[componentIndex];
  } else {
    components[componentIndex] = {
      ...components[componentIndex],
      props: { ...components[componentIndex].props, [field]: value },
    };
  }

  return components;
};
