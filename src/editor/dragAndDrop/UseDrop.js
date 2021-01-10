import React, { useContext } from 'react';
import { DnDContext } from './DnDContext';

const useDrop = () => {
  const [state, setState] = useContext(DnDContext);
  return null;
};

export default useDrop;
