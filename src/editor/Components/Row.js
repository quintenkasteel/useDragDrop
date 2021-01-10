import React, {useMemo} from 'react';

const Row = ({ children, ...component }) => {

  const data = component.block.data
  const props = data.props
  return (
    <div>
      <span>Row </span>
      <div>{children}</div>
    </div>
  );
};

export default Row;
