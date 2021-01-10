import React from 'react';
import ReactDOM from 'react-dom';
import Editor from "./editor/index";

const App = () => {
  return (
    <>
      <Editor />
    </>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
