import Render from './utils/JsonRender';
import Json from '../json';
import React from "react";
import { DndProvider } from './dragAndDrop/DnDContext.js';
import Header from './Header';
import SideBar from './SideBar';
// header
// page structure (left)
// drag and drop
// sidebar

const Editor = () => {
  return (
    <>

      <DndProvider>
        <Header />
        <Render components={Json} />
        <SideBar/>
      </DndProvider>
    </>
  );
};

export default Editor