import React from 'react';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const Board = () => {
  const [addingList, setAddingList] = React.useState(false);

  const toggleAddingList = () => {
    setAddingList((addingList) => !addingList);
  };

  return (
    <div>
      <h1 onClick={toggleAddingList}>Toggle adding list</h1>
    </div>
  );
};

export default Board;
