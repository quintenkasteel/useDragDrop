// const margin = [
//   "margin",
//   "marginTop",
//   "marginBottom",
//   "marginLeft",
//   "marginRight"
// ]

// const dimensions = [
//   "height",
//   "minHeight",
//   "maxHeight",
//   "width",
//   "minWidth",
//   "maxWidth"
// ]

// const display = [
//   "display",
//   "alignItems",
//   "justifyContent",
//   "flexWrap",
//   "float",
//   "z-index",
//   "position",
//   "visibilty",
//   "flexDirection"
// ]

// const position = [
//   "top",
//   "left",
//   "right",
//   "bottom"
// ]

// const flexBoxChildControls = [
//   "order",
//   "flexGrow",
//   "flexShrink",
//   "alignSelf"
// ]

// const padding = [
//   "padding",
//   "paddingTop",
//   "paddingBottom",
//   "paddingLeft",
//   "paddingRight"
// ]

// const border = [
//   {name: "border", type: "text", },
//   "borderRadius",
//   "borderBottom",
//   "borderTop",
//   "borderLeft",
//   "borderRight"
// ]


// // tabs
// const primaryStyles = [
//   "textColor",
//   "backgroundColor",
//   "layout",
//   "horizontalAlignment",
//   "verticalAlignment"
// ]
// const code = ["customCSS", "customJS"]
// const attributes = ["customAttribute"]
// const effect = []

// const spacing = [dimensions, margin, padding];
// const background = [];
// const layout = [display, position, flexBoxChildControls];
// const typography = [];

// export const tabs = {
//   primary : primaryStyles,
//   spacing: spacing,
//   background: background,
//   layout: layout,
//   border: border,
//   effect: effect,
//   code: code,
//   typography: typography,
//   attributes: attributes
// }


// const allStyles = [margin, border,effect, typography, padding, code, attributes, effect, dimensions, background, display, position, flexBoxChildControls].flat(Infinity)


const padding = {
  name: "padding",
  section: "padding",
  tab: "sizing",
  inputType: "text"
}

const definitions = [
  {
    type: "Row",
    droppable : true,
    acceptedProps : [padding]
  },
  {
    type: "Container",
    droppable : true,
    acceptedProps : [padding]
  }
]

const getDefinition = (type) => {
  const filter = definitions.filter(comp => comp.type === type)
 return filter !== [] && filter[0];
}

export default getDefinition


