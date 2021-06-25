import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import StyledAddIcon from '../styles/icons/addIcon';

import List from './List';
import AddList from './AddList';

const StyledBoard = styled.div`
  display: flex;
  overflow-x: auto;
`;

const StyledAddList = styled.div`
  min-width: 272px;
  margin: 10px;
  flex-shrink: 0;
`;

const StyledAddListButton = styled.div`
  background-color: rgba(0, 0, 0, 0.12);

  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  min-height: 42px;
  padding: 5px 8px;
  transition: background-color 85ms ease-in, opacity 40ms ease-in, border-color 85ms ease-in;
  height: fit-content;

  .add-icon {
    margin-right: 0.125rem;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.24);
  }
`;

const Board = ({ dispatch, board }) => {
  const [addingList, setAddingList] = React.useState(false);

  const handleDragEnd = ({ source, destination, type }) => {
    // dropped outside the allowed zones
    if (!destination) return;
    // Move list
    if (type === 'COLUMN') {
      // Prevent update if nothing has changed
      if (source.index !== destination.index) {
        dispatch({
          type: 'MOVE_LIST',
          payload: {
            oldListIndex: source.index,
            newListIndex: destination.index,
          },
        });
      }
      return;
    }

    // Move card
    if (source.index !== destination.index || source.droppableId !== destination.droppableId) {
      dispatch({
        type: 'MOVE_CARD',
        payload: {
          sourceListId: source.droppableId,
          destListId: destination.droppableId,
          oldCardIndex: source.index,
          newCardIndex: destination.index,
        },
      });
    }
  };

  const toggleAddingList = () => setAddingList((addingList) => !addingList);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId='board' direction='horizontal' type='COLUMN'>
        {(provided, _snapshot) => (
          <StyledBoard ref={provided.innerRef}>
            {board.lists.map((listId, index) => {
              return <List listId={listId} key={listId} index={index} />;
            })}

            {provided.placeholder}

            <StyledAddList>
              {addingList ? (
                <AddList toggleAddingList={toggleAddingList} />
              ) : (
                <StyledAddListButton onClick={toggleAddingList}>
                  <StyledAddIcon className='add-icon' /> Добавьте ещё одну колонку
                </StyledAddListButton>
              )}
            </StyledAddList>
          </StyledBoard>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const mapStateToProps = (state) => ({ board: state.board });

export default connect(mapStateToProps)(Board);
