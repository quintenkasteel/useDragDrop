[![Known Vulnerabilities](https://snyk.io/test/github/quintenkasteel/useDragDrop/badge.svg?targetFile=package.json)](https://snyk.io/test/github/quintenkasteel/useDragDrop?targetFile=package.json)

# Getting Started with UseDragAndDrop
A simple to use library that provides useSwipe hook for React that enables swipe gestures for touch screens.

## Usage
  `import useSwipe from '@quintenkasteel/useswipe'`

example without element
 `const swipe = useSwipe({})`

example with element
 `const swipe = useSwipe(".header", true)`



## Props
    element: String
  DOM element where the swipe is enabled. default value is body.

    preventDefault: Bool
  Prevent all default events when moving. for example scrolling.

    onStart: () => {}
  function that will be fired on start of moving. (not yet in)

    onMove: () => {}
  function that will be fired on every move. (not yet in)

    onEnd: () => {}
  function that will be fired on end of moving. (not yet in)

    onCancel: () => {}
  function that will be fired on cancel of moving. (not yet in)

## Return Values
    direction: String
  Get the current swiping direction in uppercase.   
  one of: "RIGHT" | "LEFT" | "DOWN" | "UP" 

    distance: Number
  Get the swiped amount in pixels.

    startX: Number
  Get the starting X position in pixels.

    startY: Number
  Get the starting Y position in pixels.

    endX: Number
  Get the end X position in pixels.

    endY: Number
  Get the end Y position in pixels.

    startTime: Date
  Get the date at the beginning of the swipe. 

    elapsedTime: Number
  Get the duration of the swipe in seconds. 

    speed: Number
  Get the speed of the swipe

    isSwiping: Bool 
  True when swiping. 
