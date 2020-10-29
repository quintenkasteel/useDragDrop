import React from 'react';
import ReactDOM from 'react-dom';
import {useDrag, useDrop, Draggable, Droppable, DndProvider } from '../src/index.js';

const items = [
  { number: "1", title: "🇦🇷 Argentina"},
  { number: "2", title: "🤩 YASS"},
  { number: "3", title: "👩🏼‍💻 Tech Girl"},
  { number: "4", title: "💋 Lipstick & Code"},
  { number: "5", title: "💃🏼 Latina"},
]


const DragToReorderList = () => {
  
//   // ... using predefined DNS namespace (for domain names)
// console.log('uuidv5() DNS', uuidv5('hello.example.com', uuidv5.DNS));

// // ... using predefined URL namespace (for, well, URLs)
// console.log('uuidv5() URL', uuidv5('http://example.com/hello', uuidv5.URL));
  return(
    <DndProvider>
        {items.map( (item, index) => {
          return(
            <Draggable key={index}>
                <span>{item.number}</span>
                <p>{item.title}</p>
            </Draggable>

          )
        })}
        <Droppable>
        <div>this is droppable</div>
        </Droppable>
    </DndProvider>
  )
}

const App = () => {
  return <DragToReorderList />
};

ReactDOM.render(<App />, document.querySelector('#root'));
