import styled from "styled-components"


const toPx = (val) => val + "px"
const prepareCss = (field, val) => {
  switch(field) {
    case 'padding':
      val + "px"
      break
  }
}

const Styled = styled.div`
  display: ${(props) => props.display && props.display};
  /*Specifies the alignment of flexible container's items within the flex container. */
  align-content: ${(props) => props.alignContent && alignContent};
  /*Specifies the default alignment for items within the flex container.*/
  align-items: ${(props) => props.alignItems && props.alignItems};
  /*Specifies the alignment for selected items within the flex container.*/
  align-self: ${(props) => props.alignSelf && props.alignSelf};
  /*Specifies the keyframe-based animations.*/
  animation: ${(props) => props.animation && props.animation};
  /*Specifies when the animation will start.*/
  animation-delay: ${(props) => props.animationDelay && props.animationDelay};
  /*Specifies whether the animation should play in reverse on alternate cycles or not.*/
  animation-direction: ${(props) =>
    props.animationDirection && props.animationDirection};
  /*Specifies the number of seconds or milliseconds an animation should take to complete one cycle.*/
  animation-duration: ${(props) =>
    props.animationDuration && props.animationDuration};
  /*Specifies how a CSS animation should apply styles to its target before and after it is executing.*/
  animation-fill-mode: ${(props) =>
    props.animationFillMode && props.animationFillMode};
  /*Specifies the number of times an animation cycle should be played before stopping.*/
  animation-iteration-count: ${(props) =>
    props.animationIterationCount && props.animationIterationCount};
  /*Specifies the name of @keyframes defined animations that should be applied to the selected element.*/
  animation-name: ${(props) => props.animationName && props.animationName};
  /* Specifies whether the animation is running or paused. */
  animation-play-state: ${(props) =>
    props.animationPlayState && props.animationPlayState};
  /* Specifies how a CSS animation should progress over the duration of each cycle. */
  animation-timing-function: ${(props) =>
    props.animationTimingFunction && props.animationTimingFunction};
  /* Specifies whether or not the "back" side of a transformed element is visible when facing the user. */
  backface-visibility: ${(props) =>
    props.backfaceVisibility && props.backfaceVisibility};
  /* Defines a variety of background properties within one declaration. */
  background: ${(props) => props.background && props.background};
  /* Specify whether the background image is fixed in the viewport or scrolls. */
  background-attachment: ${(props) =>
    props.backgroundAttachment && props.backgroundAttachment};
  /* Specifies the painting area of the background. */
  background-clip: ${(props) => props.backgroundClip && props.backgroundClip};
  /* Defines an element's background color. */
  background-color: ${(props) =>
    props.backgroundColor && props.backgroundColor};
  /* Defines an element's background image. */
  background-image: ${(props) =>
    props.backgroundImage && props.backgroundImage};
  /* Specifies the positioning area of the background images. */
  background-origin: ${(props) =>
    props.backgroundOrigin && props.backgroundOrigin};
  /* Defines the origin of a background image. */
  background-position: ${(props) =>
    props.backgroundPosition && props.backgroundPosition};
  /* Specify whether/how the background image is tiled. */
  background-repeat: ${(props) =>
    props.backgroundRepeat && props.backgroundRepeat};
  /* Specifies the size of the background images. */
  background-size: ${(props) => props.backgroundSize && props.backgroundSize};
  /* Sets the width, style, and color for all four sides of an element's border. */
  border: ${(props) => props.border && props.border};
  /* Sets the width, style, and color of the bottom border of an element. */
  border-bottom: ${(props) => props.bottom && props.bottom};
  /* Sets the color of the bottom border of an element. */
  border-bottom-color: ${(props) =>
    props.borderBottomColor && props.borderBottomColor};
  /* Defines the shape of the bottom-left border corner of an element. */
  border-bottom-left-radius: ${(props) =>
    props.borderBottomLeftRadius && props.borderBottomLeftRadius};
  /* Defines the shape of the bottom-right border corner of an element. */
  border-bottom-right-radius: ${(props) =>
    props.borderBottomRightRadius && props.borderBottomRightRadius};
  /* Sets the style of the bottom border of an element. */
  border-bottom-style: ${(props) =>
    props.borderBottomStyle && props.borderBottomStyle};
  /* Sets the width of the bottom border of an element. */
  border-bottom-width: ${(props) =>
    props.borderBottomWidth && props.borderBottomWidth};
  /* Specifies whether table cell borders are connected or separated. */
  border-collapse: ${(props) => props.borderCollapse && props.borderCollapse};
  /* Sets the color of the border on all the four sides of an element. */
  border-color: ${(props) => props.borderColor && props.borderColor};
  /* Specifies how an image is to be used in place of the border styles. */
  border-image: ${(props) => props.borderImage && props.borderImage};
  /* Specifies the amount by which the border image area extends beyond the border box. */
  border-image-outset: ${(props) =>
    props.borderImageOutset && props.borderImageOutset};
  /* Specifies whether the image-border should be repeated, rounded or stretched. */
  border-image-repeat: ${(props) =>
    props.borderImageRepeat && props.borderImageRepeat};
  /* Specifies the inward offsets of the image-border. */
  border-image-slice: ${(props) =>
    props.borderImageSlice && props.borderImageSlice};
  /* Specifies the location of the image to be used as a border. */
  border-image-source: ${(props) =>
    props.borderImageSource && props.borderImageSource};
  /* Specifies the width of the image-border. */
  border-image-width: ${(props) =>
    props.borderImageWidth && props.borderImageWidth};
  /* Sets the width, style, and color of the left border of an element. */
  border-left: ${(props) => (props.borderLeft ? props.borderLeft : null)};
  /* Sets the color of the left border of an element. */
  border-left-color: ${(props) =>
    props.borderLeftColor && props.borderLeftColor};
  /* Sets the style of the left border of an element. */
  border-left-style: ${(props) =>
    props.borderLeftStyle && props.borderLeftStyle};
  /* Sets the width of the left border of an element. */
  border-left-width: ${(props) =>
    props.borderLeftWidth && props.borderLeftWidth};
  /* Defines the shape of the border corners of an element. */
  border-radius: ${(props) => props.borderRadius && props.borderRadius};
  /* Sets the width, style, and color of the right border of an element. */
  border-right: ${(props) => props.borderRight && props.borderRight};
  /* Sets the color of the right border of an element. */
  border-right-color: ${(props) =>
    props.borderRightColor && props.borderRightColor};
  /* Sets the style of the right border of an element. */
  border-right-style: ${(props) =>
    props.borderRightStyle && props.borderRightStyle};
  /* Sets the width of the right border of an element. */
  border-right-width: ${(props) =>
    props.borderRightWidth && props.borderRightWidth};
  /* Sets the spacing between the borders of adjacent table cells. */
  border-spacing: ${(props) => props.borderSpacing && props.borderSpacing};
  /* Sets the style of the border on all the four sides of an element. */
  border-style: ${(props) => props.borderStyle && props.borderStyle};
  /* Sets the width, style, and color of the top border of an element. */
  border-top: ${(props) => props.borderTop && props.borderTop};
  /* Sets the color of the top border of an element. */
  border-top-color: ${(props) => props.borderTopColor && props.borderTopColor};
  /* Defines the shape of the top-left border corner of an element. */
  border-top-left-radius: ${(props) =>
    props.borderTopLeftRadius && props.borderTopLeftRadius};
  /* Defines the shape of the top-right border corner of an element. */
  border-top-right-radius: ${(props) =>
    props.borderTopRightRadius && props.borderTopRightRadius};
  /* Sets the style of the top border of an element. */
  border-top-style: ${(props) => props.borderTopStyle && props.borderTopStyle};
  /* Sets the width of the top border of an element. */
  border-top-width: ${(props) => props.borderTopWidth && props.borderTopWidth};
  /* Sets the width of the border on all the four sides of an element. */
  border-width: ${(props) => props.borderWidth && props.borderWidth};
  /* Specify the location of the bottom edge of the positioned element. */
  bottom: ${(props) => props.bottom && props.bottom};
  /* Applies one or more drop-shadows to the element's box. */
  box-shadow: ${(props) => props.boxShadow && props.boxShadow};
  /* Alter the default CSS box model. */
  box-sizing: ${(props) => props.boxSizing && props.boxSizing};
  /* Specify the position of table's caption. */
  caption-side: ${(props) => props.captionSide && props.captionSide};
  /* Specifies the placement of an element in relation to floating elements. */
  clear: ${(props) => props.clear && props.clear};
  /* Defines the clipping region. */
  clip: ${(props) => props.clip && props.clip};
  /* Specify the color of the text of an element. */
  color: ${(props) => props.color && props.color};
  /* Specifies the number of columns in a multi-column element. */
  column-count: ${(props) => props.columnCount && props.columnCount};
  /* Specifies how columns will be filled. */
  column-fill: ${(props) => props.columnFill && props.columnFill};
  /* Specifies the gap between the columns in a multi-column element. */
  column-gap: ${(props) => props.columnGap && props.columnGap};
  /* Specifies a straight line, or "rule", to be drawn between each column in a multi-column element. */
  column-rule: ${(props) => props.columnRule && props.columnRule};
  /* Specifies the color of the rules drawn between columns in a multi-column layout. */
  column-rule-color: ${(props) =>
    props.columnRuleColor && props.columnRuleColor};
  /* Specifies the style of the rule drawn between the columns in a multi-column layout. */
  column-rule-style: ${(props) =>
    props.columnRuleStyle && props.columnRuleStyle};
  /* Specifies the width of the rule drawn between the columns in a multi-column layout. */
  column-rule-width: ${(props) =>
    props.columnRuleWidth && props.columnRuleWidth};
  /* Specifies how many columns an element spans across in a multi-column layout. */
  column-span: ${(props) => props.columnSpan && props.columnSpan};
  /* Specifies the optimal width of the columns in a multi-column element.	 */
  column-width: ${(props) => props.columnWidth && props.columnWidth};
  /* A shorthand property for setting column-width and column-count properties. */
  columns: ${(props) => props.columns && props.columns};
  /* Inserts generated content. */
  content: ${(props) => props.content && props.content};
  /* Increments one or more counter values. */
  counter-increment: ${(props) =>
    props.counterIncrement && props.counterIncrement};
  /* Creates or resets one or more counters. */
  counter-reset: ${(props) => props.counterReset && props.counterReset};
  /* Specify the type of cursor. */
  cursor: ${(props) => props.cursor && props.cursor};
  /* Define the text direction/writing direction. */
  direction: ${(props) => props.direction && props.direction};
  /* Specifies how an element is displayed onscreen. */
  display: ${(props) => props.display && props.display};
  /* Show or hide borders and backgrounds of empty table cells. */
  empty-cells: ${(props) => props.emptyCells && props.emptyCells};
  /* Specifies the components of a flexible length. */
  flex: ${(props) => props.flex && props.flex};
  /* Specifies the initial main size of the flex item. */
  flex-basis: ${(props) => props.flexBasis && props.flexBasis};
  /* Specifies the direction of the flexible items. */
  flex-direction: ${(props) => props.flexDirection && props.flexDirection};
  /* A shorthand property for the flex-direction and the flex-wrap properties. */
  flex-flow: ${(props) => props.flexFlow && props.flexFlow};
  /* Specifies how the flex item will grow relative to the other items inside the flex container. */
  flex-grow: ${(props) => props.flexGrow && props.flexGrow};
  /* Specifies how the flex item will shrink relative to the other items inside the flex container. */
  flex-shrink: ${(props) => props.flexShrink && props.flexShrink};
  /* Specifies whether the flexible items should wrap or not.	 */
  flex-wrap: ${(props) => props.flexWrap && props.flexWrap};
  /* Specifies whether or not a box should float. */
  float: ${(props) => props.float && props.float};
  /* Defines a variety of font properties within one declaration. */
  font: ${(props) => props.font && props.font};
  /* Defines a list of fonts for element. */
  font-family: ${(props) => props.fontFamily && props.fontFamily};
  /* Defines the font size for the text. */
  font-size: ${(props) => props.fontSize && props.fontSize};
  /* Preserves the readability of text when font fallback occurs. */
  font-size-adjust: ${(props) => props.fontSizeAdjust && props.fontSizeAdjust};
  /* Selects a normal, condensed, or expanded face from a font. */
  font-stretch: ${(props) => props.fontStretch && props.fontStretch};
  /* Defines the font style for the text. */
  font-style: ${(props) => props.fontStyle && props.fontStyle};
  /* Specify the font variant. */
  font-variant: ${(props) => props.fontVariant && props.fontVariant};
  /* Specify the font weight of the text. */
  font-weight: ${(props) => props.fontWeight && props.fontWeight};
  /* Specify the height of an element. */
  height: ${(props) => props.height && props.height};
  /* Specifies how flex items are aligned along the main axis of the flex container after any flexible lengths and auto margins have been resolved. */
  justify-content: ${(props) =>
    props.justifyContent && props.justifyContent};
  /* Specify the location of the left edge of the positioned element. */
  left: ${(props) => props.left && props.left};
  /* Sets the extra spacing between letters. */
  letter-spacing: ${(props) => props.letterSpacing && props.letterSpacing};
  /* Sets the height between lines of text. */
  line-height: ${(props) => props.lineHeight && props.lineHeight};
  /* Defines the display style for a list and list elements. */
  list-style: ${(props) => props.listStyle && props.listStyle};
  /* Specifies the image to be used as a list-item marker. */
  list-style-image: ${(props) => props.listStyleImage && props.listStyleImage};
  /* Specifies the position of the list-item marker. */
  list-style-position: ${(props) =>
    props.listStylePosition && props.listStylePosition};
  /* Specifies the marker style for a list-item. */
  list-style-type: ${(props) => props.listStyleType && props.listStyleType};
  /* Sets the margin on all four sides of the element. */
  margin: ${(props) => props.margin && props.margin};
  /* Sets the bottom margin of the element. */
  margin-bottom: ${(props) => props.marginBottom && props.marginBottom};
  /* Sets the left margin of the element. */
  margin-left: ${(props) => props.marginLeft && props.marginLeft};
  /* Sets the right margin of the element. */
  margin-right: ${(props) => props.marginRight && props.marginRight};
  /* Sets the top margin of the element. */
  margin-top: ${(props) => props.marginTop && props.marginTop};
  /* Specify the maximum height of an element. */
  max-height: ${(props) => props.maxHeight && props.maxHeight};
  /* Specify the maximum width of an element. */
  max-width: ${(props) => props.maxWidth && props.maxWidth};
  /* Specify the minimum height of an element. */
  min-height: ${(props) => props.minHeight && props.minHeight};
  /* Specify the minimum width of an element. */
  min-width: ${(props) => props.minWidth && props.minWidth};
  /* Specifies the transparency of an element. */
  opacity: ${(props) => props.opacity && props.opacity};
  /* Specifies the order in which a flex items are displayed and laid out within a flex container. */
  order: ${(props) => props.order && props.order};
  /* Sets the width, style, and color for all four sides of an element's outline. */
  outline: ${(props) => props.outline && props.outline};
  /* Sets the color of the outline. */
  outline-color: ${(props) => props.outlineColor && props.outlineColor};
  /* Set the space between an outline and the border edge of an element. */
  outline-offset: ${(props) => props.outlineOffset && props.outlineOffset};
  /* Sets a style for an outline. */
  outline-style: ${(props) =>
    props.outlineOutlineStyle && props.outlineOutlineStyle};
  /* Sets the width of the outline. */
  outline-width: ${(props) => props.outlineWidth && props.outlineWidth};
  /* Specifies the treatment of content that overflows the element's box. */
  overflow: ${(props) => props.overflow && props.overflow};
  /* Specifies the treatment of content that overflows the element's box horizontally. */
  overflow-x: ${(props) => props.overflowX && props.overflowX};
  /* Specifies the treatment of content that overflows the element's box vertically. */
  overflow-y: ${(props) => props.overflowY && props.overflowY};
  /* Sets the padding on all four sides of the element. */
  padding: ${(props) => props.padding && toPx(props.padding)};
  /* Sets the padding to the bottom side of an element. */
  padding-bottom: ${(props) => props.paddingBottom && props.paddingBottom};
  /* Sets the padding to the left side of an element. */
  padding-left: ${(props) => props.paddingLeft && props.paddingLeft};
  /* Sets the padding to the right side of an element. */
  padding-right: ${(props) => props.paddingRight && props.paddingRight};
  /* Sets the padding to the top side of an element. */
  padding-top: ${(props) => props.paddingTop && props.paddingTop};
  /* Insert a page breaks after an element. */
  page-break-after: ${(props) => props.pageBreakAfter && props.pageBreakAfter};
  /* Insert a page breaks before an element. */
  page-break-before: ${(props) =>
    props.pageBreakBefore && props.pageBreakBefore};
  /* Insert a page breaks inside an element. */
  page-break-inside: ${(props) =>
    props.pageBreakInside && props.pageBreakInside};
  /* Defines the perspective from which all child elements of the object are viewed. */
  perspective: ${(props) => props.perspective && props.perspective};
  /* Defines the origin (the vanishing point for the 3D space) for the perspective property. */
  perspective-origin: ${(props) =>
    props.perspectiveOrigin && props.perspectiveOrigin};
  /* Specifies how an element is positioned. */
  position: ${(props) => props.position && props.position};
  /* Specifies quotation marks for embedded quotations. */
  quotes: ${(props) => props.quotes && props.quotes};
  /* Specifies whether or not an element is resizable by the user. */
  resize: ${(props) => props.resize && props.resize};
  /* Specify the location of the right edge of the positioned element. */
  right: ${(props) => props.right && props.right};
  /* Specifies the length of the tab character. */
  tab-size: ${(props) => props.tabSize && props.tabSize};
  /* Specifies a table layout algorithm. */
  table-layout: ${(props) => props.tableLayout && props.tableLayout};
  /* Sets the horizontal alignment of inline content. */
  text-align: ${(props) => props.textAlign && props.textAlign};
  /* Specifies how the last line of a block or a line right before a forced line break is aligned when text-align is justify. */
  text-align-last: ${(props) => props.textAlignLast && props.textAlignLast};
  /* Specifies the decoration added to text. */
  text-decoration: ${(props) => props.textDecoration && props.textDecoration};
  /* Specifies the color of the text-decoration-line. */
  text-decoration-color: ${(props) =>
    props.textDecorationColor && props.textDecorationColor};
  /* Specifies what kind of line decorations are added to the element. */
  text-decoration-line: ${(props) =>
    props.textDecorationLine && props.textDecorationLine};
  /* Specifies the style of the lines specified by the text-decoration-line property */
  text-decoration-style: ${(props) =>
    props.textDecorationStyle && props.textDecorationStyle};
  /* Indent the first line of text. */
  text-indent: ${(props) => props.textIndent && props.textIndent};
  /* Specifies the justification method to use when the text-align property is set to justify. */
  text-justify: ${(props) => props.textJustify && props.textJustify};
  /* Specifies how the text content will be displayed, when it overflows the block containers. */
  text-overflow: ${(props) => props.textOverflow && props.textOverflow};
  /* Applies one or more shadows to the text content of an element. */
  text-shadow: ${(props) => props.textShadow && props.textShadow};
  /* Transforms the case of the text. */
  text-transform: ${(props) => props.textTransform && props.textTransform};
  /* Specify the location of the top edge of the positioned element. */
  top: ${(props) => props.top && props.top};
  /* Applies a 2D or 3D transformation to an element. */
  transform: ${(props) => props.transform && props.transform};
  /* Defines the origin of transformation for an element. */
  transform-origin: ${(props) =>
    props.transformOrigin && props.transformOrigin};
  /* Specifies how nested elements are rendered in 3D space. */
  transform-style: ${(props) => props.transformStyle && props.transformStyle};
  /* Defines the transition between two states of an element. */
  transition: ${(props) => props.transition && props.transition};
  /* Specifies when the transition effect will start. */
  transition-delay: ${(props) =>
    props.transitionDelay && props.transitionDelay};
  /* Specifies the number of seconds or milliseconds a transition effect should take to complete. */
  transition-duration: ${(props) =>
    props.transitionDuration && props.transitionDuration};
  /* Specifies the names of the CSS properties to which a transition effect should be applied. */
  transition-property: ${(props) =>
    props.transitionProperty && props.transitionProperty};
  /* Specifies the speed curve of the transition effect. */
  transition-timing-function: ${(props) =>
    props.transitionTimingFunction && props.transitionTimingFunction};
  /* Sets the vertical positioning of an element relative to the current text baseline. */
  vertical-align: ${(props) => props.verticalAlign && props.verticalAlign};
  /* Specifies whether or not an element is visible. */
  visibility: ${(props) => props.visibility && props.visibility};
  /* Specifies how white space inside the element is handled. */
  white-space: ${(props) => props.whiteSpace && props.whiteSpace};
  /* Specify the width of an element. */
  width: ${(props) => props.width && props.width};
  /* Specifies how to break lines within words. */
  word-break: ${(props) => props.wordBreak && props.wordBreak};
  /* Sets the spacing between words. */
  word-spacing: ${(props) => props.wordSpacing && props.wordSpacing};
  /* Specifies whether to break words when the content overflows the boundaries of its container. */
  word-wrap: ${(props) => props.wordWrap && props.wordWrap};
  /*Specifies a layering or stacking order for positioned elements. */
  z-index: ${(props) => props.zIndex && props.zIndex};
`;
export default Styled
